import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getSizeWindow } from '../../Shared/getSizeWindow'

function* getModuleData(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { moduleID },
  } = params

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

    const coursesNext = getPreparedCourses(readCourses)

    yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))
    yield put(
      actionSync.SET_COURSE_ID_ACTIVE({ courseID: readCourses?.courseID })
    )
    yield put(actionSync.SET_COURSES(coursesNext))

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getModuleData Error', error.name + ': ' + error.message)
  }
}

export default function* getModuleDataSaga() {
  yield takeEvery([actionAsync.GET_MODULE_DATA.REQUEST().type], getModuleData)
}
