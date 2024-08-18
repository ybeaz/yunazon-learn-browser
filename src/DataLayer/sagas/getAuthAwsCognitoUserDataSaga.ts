import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryGetAuthAwsCognitoUserDataArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import {
  getResponseGraphqlAsync,
  ResolveGraphqlEnumType,
} from '../../../../yourails_communication_layer'
import { ClientAppType } from '../../@types/ClientAppType'
import { getLocalStorageSetObjTo } from '../../Shared/getLocalStorageSetObjTo'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getModules } from './getModulesSaga'

export function* getAuthAwsCognitoUserData(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { code },
  } = params

  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]

    const variables: QueryGetAuthAwsCognitoUserDataArgs = {
      userIdDataAwsCognitoInput: {
        code,
        redirect_uri,
        client_app: ClientAppType['ACADEMY'],
      },
    }

    const authAwsCognitoUserData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['getAuthAwsCognitoUserData'],
      },
      {
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield getLocalStorageSetObjTo({
      refresh_token: authAwsCognitoUserData.refresh_token,
      sub: authAwsCognitoUserData.sub,
    })

    yield put(
      actionSync.SET_AUTH_AWS_COGNITO_USER_DATA({
        authAwsCognitoUserData,
        source: 'getAuthAwsCognitoUserDataSaga',
      })
    )

    yield getModules()
  } catch (error: any) {
    console.log('getAuthAwsCognitoUserDataSaga [53] ERROR', `${error.name}: ${error.message}`)
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
