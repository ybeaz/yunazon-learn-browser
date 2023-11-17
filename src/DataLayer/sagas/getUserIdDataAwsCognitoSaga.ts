import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ClientAppType } from '../../@types/ClientAppType'

export function* getUserIdDataAwsCognito(params: any): Iterable<any> {
  const {
    data: { code },
  } = params

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]

    const variables = {
      userIdDataAwsCognitoInput: {
        code,
        redirect_uri,
        client_app: ClientAppType['ACADEMY'],
      },
    }

    const userIdDataAwsCognito: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'getUserIdDataAwsCognito',
    })

    console.info('getUserIdDataAwsCognitoSaga [32]', {
      userIdDataAwsCognito,
      variables,
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
