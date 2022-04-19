import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthWebTokenConnector } from '../../CommunicationLayer/getAuthWebToken.connector'

function* getAuthWebToken(args: any) {
  const {
    data: { userWebTokenAuth: userWebTokenAuth2 },
  } = args

  const { axiosClient, method, params } =
    getAuthWebTokenConnector(userWebTokenAuth2)

  try {
    const {
      data: {
        data: { authWebToken },
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
    } = authWebToken

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

    yield put(actionAsync.READ_USER_AUTH.REQUEST())
  } catch (error) {
    console.info('getAuthWebToken.saga [25]', { message: error.message })
  }
}

export default function* getAuthWebTokenSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_WEB_TOKEN.REQUEST().type],
    getAuthWebToken
  )
}
