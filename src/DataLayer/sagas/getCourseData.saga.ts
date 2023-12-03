import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { CourseType } from '../../@types/GraphqlTypes'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
// import { courseSuccess } from '../courseSuccessMock'

function* getCourseData(dataInput: any): Iterable<any> {
  const {
    data: { moduleID },
  } = dataInput

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      readCoursesInput: [
        {
          moduleID,
        },
      ],
    }

    const readCourses: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readCourses',
    })

    const coursesNext = getPreparedCourses([readCourses])

    yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))
    yield put(
      actionSync.SET_COURSE_ID_ACTIVE({ courseID: readCourses?.courseID })
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
