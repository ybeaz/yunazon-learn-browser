import { takeEvery, put } from 'redux-saga/effects'

import { AWS_COGNITO_API } from '../../Constants/servers.const'
import { getGetCognitoTokensConnector } from '../../CommunicationLayer/getGetCognitoTokensConnector'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

function* getGetCognitoTokens(action) {
  const {
    data: { code },
  } = action

  const { axiosClient, method, params } = getGetCognitoTokensConnector({
    ...AWS_COGNITO_API.getTokensOauth2,
    payload: { code },
  })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const { data: data2 } = yield axiosClient[method]('', params)

    yield put(actionAsync.GET_COGNITO_TOKENS.SUCCESS(data2))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info(
      'getGetCognitoTokensSaga [23]',
      error.name + ': ' + error.message
    )
  }
}

export default function* getGetCognitoTokensSaga() {
  yield takeEvery(
    [actionAsync.GET_COGNITO_TOKENS.REQUEST().type],
    getGetCognitoTokens
  )
}
