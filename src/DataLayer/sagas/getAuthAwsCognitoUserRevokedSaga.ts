import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryGetAuthAwsCognitoUserRevokedArgs } from '../../@types/GraphqlTypes'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { ClientAppType } from '../../@types/ClientAppType'
import { getLocalStorageSetObjTo } from '../../Shared/getLocalStorageSetObjTo'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* getAuthAwsCognitoUserRevoked(): Iterable<any> {
  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]

    let refresh_token = null

    const storeStateApp = select((store: RootStoreType) => store)

    const refresh_token_App =
      // @ts-expect-error
      storeStateApp?.authAwsCognitoUserData?.refresh_token

    const refresh_token_localStorage = getLocalStorageReadKeyObj('refresh_token')

    if (refresh_token_App) refresh_token = refresh_token_App
    else if (refresh_token_localStorage) refresh_token = refresh_token_localStorage

    if (!refresh_token) return

    const variables: QueryGetAuthAwsCognitoUserRevokedArgs = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
        client_app: ClientAppType['ACADEMY'],
      },
    }

    const authAwsCognitoUserData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['getAuthAwsCognitoUserRevoked'],
      },
      {
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(
      actionSync.SET_AUTH_AWS_COGNITO_USER_DATA({
        authAwsCognitoUserData,
        source: 'getAuthAwsCognitoUserRevokedSaga',
      })
    )

    getLocalStorageSetObjTo({
      refresh_token: '',
      sub: '',
    })
  } catch (error: any) {
    console.log('getAuthAwsCognitoUserRevokedSaga [65] ERROR', `${error.name}: ${error.message}`)
  }
}

/**
 * @description Function to getAuthAwsCognitoUserRevokedSaga
 * @import import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
 */
export default function* getAuthAwsCognitoUserRevokedSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_AWS_COGNITO_USER_REVOKED.REQUEST().type],
    getAuthAwsCognitoUserRevoked
  )
}
