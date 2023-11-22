import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { CourseType } from '../../@types/GraphqlTypes'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
// import { courseSuccess } from '../courseSuccessMock'

function* getCourseData(dataInput: any) {
  const {
    data: { moduleID },
  } = dataInput

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      readCourseInput: {
        moduleID,
      },
    }

    const readCourse: CourseType = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readCourse',
    })

    const coursesNext = getPreparedCourses([readCourse])

    yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))
    yield put(
      actionSync.SET_COURSE_ID_ACTIVE({ courseID: readCourse?.courseID })
    )
    yield put(actionSync.SET_COURSES(coursesNext))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getCourseData Error', error.name + ': ' + error.message)
  }
}

export default function* getCourseDataSaga() {
  yield takeEvery([actionAsync.GET_MODULE_DATA.REQUEST().type], getCourseData)
}
