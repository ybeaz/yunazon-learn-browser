import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthWebTokenConnector } from '../../CommunicationLayer/getAuthWebToken.connector'

function* getAuthWebToken(args: any) {
  const {
    data: { userWebTokenAuth: userWebTokenAuth2 },
  } = args

  const { method, url, payload, options } =
    getAuthWebTokenConnector(userWebTokenAuth2)

  try {
    const {
      data: {
        data: { authWebToken },
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
    } = authWebToken

    yield put(
      actionSync.SET_USER_PROFILE({
        userEmail,
        userId,
        userIdExternal: '',
        userLoginSource: 'un.userto.com',
        userName,
        userPhone,
        userRoles,
        userStatus,
        userWebTokenAuth,
      })
    )
  } catch (error) {
    console.info('getAuthWebToken.saga [25]', { message: error.message })
  }
}

export default function* getAuthWebTokenWatcher() {
  yield takeEvery(
    [actionAsync.GET_AUTH_WEB_TOKEN.REQUEST().type],
    getAuthWebToken
  )
}
