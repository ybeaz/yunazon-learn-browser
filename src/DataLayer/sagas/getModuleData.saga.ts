import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { ModuleType } from '../../@types/GraphqlTypes'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

function* getModuleData(dataInput: any) {
  const {
    data: { moduleID },
  } = dataInput

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      moduleID,
    }

    const readModule: ModuleType = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readModule',
    })

    console.info('getModuleData.saga [25]', { readModule })

    yield put(actionSync.SET_MODULE({ readModule }))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getModuleData Error', error.name + ': ' + error.message)
  }
}

export default function* getModuleDataSaga() {
  yield takeEvery([actionAsync.GET_MODULE_DATA.REQUEST().type], getModuleData)
}
