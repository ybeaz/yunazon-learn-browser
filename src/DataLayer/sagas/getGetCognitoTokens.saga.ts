import { takeEvery, put } from 'redux-saga/effects'

import { getGetCognitoTokensConnector } from '../../CommunicationLayer/getGetCognitoTokensConnector'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

function* getGetCognitoTokens(action: any) {
  const {
    data: { code },
  } = action

  console.info('getGetCognitoTokens.saga [11]', { action, code })

  // const { axiosClient, method, params } = getGetCognitoTokensConnector({
  //   ...AWS_COGNITO_API.getTokensOauth2,
  //   payload: { code },
  // })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    // const { data: data2 } = yield axiosClient[method]('', params)

    const data2 = ''

    yield put(actionAsync.GET_COGNITO_TOKENS.SUCCESS(data2))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
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
