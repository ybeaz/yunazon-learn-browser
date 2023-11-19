import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ClientAppType } from '../../@types/ClientAppType'

export function* getAuthAwsCognitoUserData(params: any): Iterable<any> {
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
      resolveGraphqlName: 'getAuthAwsCognitoUserData',
    })

    yield put(
      actionSync.SET_USERID_DATA_AWS_COGNITO({
        userIdDataAwsCognito,
        source: 'getAuthAwsCognitoUserDataSaga',
      })
    )

    getSetObjToLocalStorage(userIdDataAwsCognito)
  } catch (error: any) {
    console.log('ERROR getAuthAwsCognitoUserDataSaga', {
      error: error.message,
    })
  }
}

/**
 * @description Function to getAuthAwsCognitoUserDataSaga
 * @import import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
 */
export default function* getAuthAwsCognitoUserDataSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_AWS_COGNITO_USER_DATA.REQUEST().type],
    getAuthAwsCognitoUserData
  )
}
