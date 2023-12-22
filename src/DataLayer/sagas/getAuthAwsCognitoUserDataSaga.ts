import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { ClientAppType } from '../../@types/ClientAppType'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'

export function* getAuthAwsCognitoUserData(
  params: ActionReduxType | any
): Iterable<any> {
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

    const authAwsCognitoUserData: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'getAuthAwsCognitoUserData',
    })

    yield getSetObjToLocalStorage({
      refresh_token: authAwsCognitoUserData.refresh_token,
    })

    yield put(
      actionSync.SET_AUTH_AWS_COGNITO_USER_DATA({
        authAwsCognitoUserData,
        source: 'getAuthAwsCognitoUserDataSaga',
      })
    )
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
