import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { getSizeWindow } from '../../Shared/getSizeWindow'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getGlobalVarsConnector } from '../../CommunicationLayer/getGlobalVars.connector'

function* getGlobalVars() {
  try {
    const { method, url, options } = getGlobalVarsConnector()
    const { data: globalVars } = yield axios[method](url, {}, options)
    yield put(actionAsync.GET_GLOBAL_VARS.SUCCESS(globalVars))

    const language = localStorage.getItem('language')
    if (language) {
      yield put(actionSync.SELECT_LANGUAGE(language))
    }

    const userString = localStorage.getItem('user')
    if (typeof userString === 'string') {
      console.info('getGlobalVars.saga [20]', { userString })
      const user = JSON.parse(userString)

      yield put(actionSync.SET_USER(user))
    }

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }
  } catch (error) {
    console.info('getGlobalVars [31]', error.name + ': ' + error.message)
  }
}

export default function* getGlobalVarsWatcher() {
  yield takeEvery([actionAsync.GET_GLOBAL_VARS.REQUEST().type], getGlobalVars)
}
