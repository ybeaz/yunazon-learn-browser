import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { ModuleType } from '../../@types/GraphqlTypes'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

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

    const readCourse: ModuleType = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readCourse',
    })

    yield put(actionSync.SET_COURSE_ACTIVE({ readCourse }))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getCourseData Error', error.name + ': ' + error.message)
  }
}

export default function* getCourseDataSaga() {
  yield takeEvery([actionAsync.GET_MODULE_DATA.REQUEST().type], getCourseData)
}
