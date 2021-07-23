import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

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
        data: { authLoginPass },
      },
    } = yield axios[method](url, payload, options)

    console.info('sendAuthSignIn.saga [31]', { authLoginPass })

    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* sendAuthSignInWatcher() {
  yield takeEvery([actionAsync.SEND_AUTH_SIGNIN.REQUEST().type], sendAuthSignIn)
}
