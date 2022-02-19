import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { IRootStore } from '../../Interfaces/IRootStore'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthSignInConnector } from '../../CommunicationLayer/getAuthSignIn.connector'

function* getAuthSignIn() {
  const {
    forms: {
      user: { userEmail, passwordAuth },
    },
  } = yield select((store: IRootStore) => store)

  console.info('getAuthSignIn.saga [15]', {
    userEmail,
    passwordAuth,
  })

  const { method, url, payload, options } = getAuthSignInConnector(
    userEmail,
    passwordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { authLoginPass },
      },
    } = yield axios[method](url, payload, options)

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signInManually', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

    yield put(
      actionSync.SET_USER_PROFILE({
        ...authLoginPass,
        userStatus: authLoginPass.status,
        loginSource: 'un.userto.com',
      })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getAuthSignInWatcher() {
  yield takeEvery([actionAsync.GET_AUTH_SIGN_IN.REQUEST().type], getAuthSignIn)
}
