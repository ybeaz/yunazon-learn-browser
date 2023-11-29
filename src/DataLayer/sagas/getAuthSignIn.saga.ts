import { takeEvery, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthSignInConnector } from '../../CommunicationLayer/getAuthSignIn.connector'

function* getAuthSignIn(): Iterable<any> {
  const {
    forms: {
      user: { userEmail, userPasswordAuth },
    },
  } = yield select((store: RootStoreType) => store)

  const { axiosClient, method, params } = getAuthSignInConnector(
    userEmail,
    userPasswordAuth
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { authLoginPass },
      },
    } = yield axiosClient[method]('', params)

    const {
      email: userEmail,
      message,
      path,
      phone: userPhone,
      roles: userRoles,
      status: userStatus,
      uid: userIdAuth,
      userName,
      webToken: userWebTokenAuth,
    } = authLoginPass

    yield put(
      actionSync.SET_USER_PROFILE({
        userEmail,
        userIdAuth,
        userIdExternal: '',
        userLoginSource: 'un.userto.com',
        userName,
        userPhone,
        userRoles,
        userStatus,
        userWebTokenAuth,
      })
    )

    console.info()
    yield put(actionAsync.READ_USER_AUTH.REQUEST())

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signInManually', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getAuthSignInSaga() {
  yield takeEvery([actionAsync.GET_AUTH_SIGN_IN.REQUEST().type], getAuthSignIn)
}
