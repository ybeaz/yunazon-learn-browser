import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { sendAuthSignUpConnector } from '../../CommunicationLayer/sendAuthSignUp.connector'

function* sendAuthSignUp() {
  const {
    forms: { emailAuth, passwordAuth },
  } = yield select(store => store)

  console.info('sendAuthSignUp.saga [11]', {
    emailAuth,
    passwordAuth,
    action: actionAsync.SEND_AUTH_SIGNUP.REQUEST().type,
  })

  const { method, url, payload, options } = sendAuthSignUpConnector(
    emailAuth,
    passwordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { sendAuthSignUp },
      },
    } = yield axios[method](url, payload, options)

    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* sendAuthSignUpWatcher() {
  yield takeEvery([actionAsync.SEND_AUTH_SIGNUP.REQUEST().type], sendAuthSignUp)
}
