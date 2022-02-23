import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getReadUserAuthConnector } from '../../CommunicationLayer/getReadUserAuth.connector'

function* getReadUserAuth() {
  const {
    forms: { user },
  } = yield select(store => store)

  const { userIdExternal, userWebTokenAuth, ...user2 } = user

  const { method, url, payload, options } = getReadUserAuthConnector(user2)

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const {
      data: { data },
    } = yield axios[method](url, payload, options)

    const { responseMessage, ...rest } = data[payload.operationName]

    yield put(actionSync.SET_USER_PROFILE({ ...rest, userIdExternal }))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('getReadUserAuth [45]', error.name + ': ' + error.message)
  }
}

export default function* getReadUserAuthWatcher() {
  yield takeEvery([actionAsync.READ_USER_AUTH.REQUEST().type], getReadUserAuth)
}
