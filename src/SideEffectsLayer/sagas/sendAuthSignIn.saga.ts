import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { sendAuthSignInConnector } from '../../CommunicationLayer/sendAuthSignIn.connector'

function* sendAuthSignIn() {
  const {
    forms: { emailAuth, passwordAuth },
  } = yield select(store => store)

  console.info('sendAuthSignIn.saga [11]', {
    emailAuth,
    passwordAuth,
    action: actionAsync.SEND_AUTH_SIGNIN.REQUEST().type,
  })

  const { method, url, data, options } = sendAuthSignInConnector(
    emailAuth,
    passwordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: data2, // : { sendAuthSignIn },
      },
    } = yield axios[method](url, data, options)

    console.info('sendAuthSignIn.saga [31]', { data2 })

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* sendAuthSignInWatcher() {
  yield takeEvery([actionAsync.SEND_AUTH_SIGNIN.REQUEST().type], sendAuthSignIn)
}
