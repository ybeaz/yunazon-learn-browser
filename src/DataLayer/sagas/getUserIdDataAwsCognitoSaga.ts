import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

export function* getUserIdDataAwsCognito(params: any): Iterable<any> {
  const {
    data: { code },
  } = params

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS[envType]

    const variables = {
      userIdDataAwsCognitoInput: {
        code,
        redirect_uri,
      },
    }

    const userIdDataAwsCognito: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'getUserIdDataAwsCognito',
    })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getSetObjToLocalStorage(userIdDataAwsCognito)
  } catch (error: any) {
    console.log('ERROR getUserIdDataAwsCognitoSaga', { error: error.message })
  }
}

/**
 * @description Function to getUserIdDataAwsCognitoSaga
 * @import import getUserIdDataAwsCognitoSaga from './sagas/getUserIdDataAwsCognitoSaga'
 */
export default function* getUserIdDataAwsCognitoSaga() {
  yield takeEvery(
    [actionAsync.GET_USERID_DATA_AWS_COGNITO_ASYNC.REQUEST().type],
    getUserIdDataAwsCognito
  )
}
