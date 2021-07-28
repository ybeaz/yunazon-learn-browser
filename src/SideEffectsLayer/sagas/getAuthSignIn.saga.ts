import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthSignInConnector } from '../../CommunicationLayer/getAuthSignIn.connector'

function* getAuthSignIn() {
  const {
    forms: { emailAuth, passwordAuth },
  } = yield select(store => store)

  const { method, url, payload, options } = getAuthSignInConnector(
    emailAuth,
    passwordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { getAuthLoginPass },
      },
    } = yield axios[method](url, payload, options)

    yield put(
      actionSync.SET_USER({ ...getAuthLoginPass, loginSource: 'un.userto.com' })
    )

    const { webToken } = getAuthLoginPass
    getSetObjToLocalStorage({ authWebToken: webToken })

    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getAuthSignInWatcher() {
  yield takeEvery([actionAsync.GET_AUTH_SIGN_IN.REQUEST().type], getAuthSignIn)
}
