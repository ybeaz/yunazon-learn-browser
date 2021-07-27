import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { sendAuthSignInConnector } from '../../CommunicationLayer/sendAuthSignIn.connector'

function* sendAuthSignIn() {
  const {
    forms: { emailAuth, passwordAuth },
  } = yield select(store => store)

  const { method, url, payload, options } = sendAuthSignInConnector(
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

    getSetObjToLocalStorage({
      user: JSON.stringify({
        ...getAuthLoginPass,
        loginSource: 'un.userto.com',
      }),
    })
    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* sendAuthSignInWatcher() {
  yield takeEvery([actionAsync.SEND_AUTH_SIGNIN.REQUEST().type], sendAuthSignIn)
}
