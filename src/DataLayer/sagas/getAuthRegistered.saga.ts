import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { IRootStore } from '../../Interfaces/IRootStore'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthRegisteredConnector } from '../../CommunicationLayer/getAuthRegistered.connector'

function* getAuthRegistered() {
  const {
    forms: {
      user: { userEmail2, userName2, userPasswordAuth2 },
    },
  } = yield select((store: IRootStore) => store)

  const { method, url, payload, options } = getAuthRegisteredConnector(
    userName2,
    userEmail2,
    userPasswordAuth2
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { register },
      },
    } = yield axios[method](url, payload, options)

    const {
      email: userEmail,
      message,
      path,
      phone: userPhone,
      roles: userRoles,
      status: userStatus,
      uid: userId,
      userName,
      webToken: userWebTokenAuth,
    } = register

    yield put(
      actionSync.SET_USER_PROFILE({
        userEmail,
        userId,
        userLoginSource: 'un.userto.com',
        userName,
        userPhone,
        userRoles,
        userStatus,
        userWebTokenAuth,
      })
    )

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signUpManually', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

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
