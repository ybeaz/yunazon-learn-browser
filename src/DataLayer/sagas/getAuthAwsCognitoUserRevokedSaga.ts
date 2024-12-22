import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryGetAuthAwsCognitoUserRevokedArgs } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from 'yourails_common'
import { getDetectedEnv } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { ClientAppEnumType } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'
import { getLocalStorageReadKeyObj } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

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
        client_app: ClientAppEnumType['ACADEMY'],
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
