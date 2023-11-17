import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ClientAppType } from '../../@types/ClientAppType'

function* getRevokedUserAuthAwsCognito(params: any): Iterable<any> {
  const {
    data: { refresh_token },
  } = params

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]

    const variables = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
        client_app: ClientAppType['ACADEMY'],
      },
    }

    const userIdDataAwsCognito: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'getRevokedUserAuthAwsCognito',
    })

    yield put(actionSync.SET_USERID_DATA_AWS_COGNITO({ userIdDataAwsCognito }))

    getDeletedObjFromLocalStorage({
      ...userIdDataAwsCognito,
      refresh_token: null,
    })
  } catch (error: any) {
    console.log('ERROR getRevokedUserAuthAwsCognitoSaga', {
      error: error.message,
    })
  }
}

/**
 * @description Function to getRevokedUserAuthAwsCognitoSaga
 * @import import getRevokedUserAuthAwsCognitoSaga from './sagas/getRevokedUserAuthAwsCognitoSaga'
 */
export default function* getRevokedUserAuthAwsCognitoSaga() {
  yield takeEvery(
    [actionAsync.GET_REVOKED_USER_AUTH_AWS_COGNITO_ASYNC.REQUEST().type],
    getRevokedUserAuthAwsCognito
  )
}
