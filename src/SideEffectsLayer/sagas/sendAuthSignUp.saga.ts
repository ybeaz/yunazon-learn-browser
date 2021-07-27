import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { sendAuthSignUpConnector } from '../../CommunicationLayer/sendAuthSignUp.connector'

function* sendAuthSignUp() {
  const {
    forms: { userNameAuth, emailAuth, passwordAuth, passwordAuth2 },
  } = yield select(store => store)

  const { method, url, payload, options } = sendAuthSignUpConnector(
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
    getSetObjToLocalStorage({
      user: JSON.stringify({ ...getRegistered, loginSource: 'un.userto.com' }),
    })
    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* sendAuthSignUpWatcher() {
  yield takeEvery([actionAsync.SEND_AUTH_SIGNUP.REQUEST().type], sendAuthSignUp)
}
