import { takeEvery, put } from 'redux-saga/effects'

import { getSizeWindow } from '../../Shared/getSizeWindow'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getGlobalVarsConnector } from '../../CommunicationLayer/getGlobalVars.connector'

function* getGlobalVars() {
  try {
    const { axiosClient, method } = getGlobalVarsConnector()

    const { data: globalVars } = yield axiosClient[method]('')

    yield put(actionAsync.GET_GLOBAL_VARS.SUCCESS(globalVars))

    const language = localStorage.getItem('language')
    if (language) {
      yield put(actionSync.SELECT_LANGUAGE_APP(language))
    }

    const userWebTokenAuth = localStorage.getItem('userWebTokenAuth')

    if (
      typeof userWebTokenAuth === 'string' &&
      userWebTokenAuth !== 'null' &&
      userWebTokenAuth !== 'undefined'
    ) {
      yield put(actionAsync.GET_AUTH_WEB_TOKEN.REQUEST({ userWebTokenAuth }))
    }

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }
  } catch (error) {
    console.info('getGlobalVars [31]', error.name + ': ' + error.message)
  }
}

export default function* getGlobalVarsSaga() {
  yield takeEvery([actionAsync.GET_GLOBAL_VARS.REQUEST().type], getGlobalVars)
}
