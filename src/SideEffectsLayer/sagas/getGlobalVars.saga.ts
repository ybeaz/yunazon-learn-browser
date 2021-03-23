import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { getGlobalVarsConnector } from '../../ComminicationLayer/getGlobalVars.connector'

function* getGlobalVars() {
  try {
    const { method, url, options } = getGlobalVarsConnector()
    const { data: globalVars } = yield axios[method](url, {}, options)
    yield put({ type: action.GET_GLOBAL_VARS.SUCCESS, data: globalVars })
  } catch (error) {
    console.info('getGlobalVars [31]', error.name + ': ' + error.message)
  }
}

export default function* getGlobalVarsWatcher() {
  yield takeEvery([action.GET_GLOBAL_VARS.REQUEST], getGlobalVars)
}
