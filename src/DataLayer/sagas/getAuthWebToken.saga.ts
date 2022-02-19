import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthWebTokenConnector } from '../../CommunicationLayer/getAuthWebToken.connector'

function* getAuthWebToken(args: any) {
  const {
    data: { webToken },
  } = args

  const { method, url, payload, options } = getAuthWebTokenConnector(webToken)

  try {
    const {
      data: {
        data: { authWebToken },
      },
    } = yield axios[method](url, payload, options)

    yield put(
      actionSync.SET_USER_PROFILE({
        ...authWebToken,
        userStatus: authWebToken.status,
        userLoginSource: 'un.userto.com',
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
