import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthRegisteredConnector } from '../../CommunicationLayer/getAuthRegistered.connector'

function* getAuthRegistered() {
  const {
    forms: { userNameAuth, emailAuth, passwordAuth, passwordAuth2 },
  } = yield select(store => store)

  const { method, url, payload, options } = getAuthRegisteredConnector(
    userNameAuth,
    emailAuth,
    passwordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { getRegistered },
      },
    } = yield axios[method](url, payload, options)

    yield put(
      actionSync.SET_USER({ ...getRegistered, loginSource: 'un.userto.com' })
    )

    const { webToken } = getRegistered
    getSetObjToLocalStorage({ authWebToken: webToken })

    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getAuthRegisteredWatcher() {
  yield takeEvery(
    [actionAsync.GET_AUTH_SIGN_UP.REQUEST().type],
    getAuthRegistered
  )
}
