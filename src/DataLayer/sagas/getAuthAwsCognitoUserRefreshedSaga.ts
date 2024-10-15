import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryGetAuthAwsCognitoUserRefreshedArgs } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { ClientAppEnumType } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { getLocalStorageReadKeyObj } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getAuthAwsCognitoUserRefreshedGenerator(): Iterable<any> {
  try {
    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]

    let refresh_token = null

    const storeStateApp: any = select((store: RootStoreType) => store)
    const screenActive = storeStateApp?.componentsState?.screenActive

    const refresh_token_App = storeStateApp?.authAwsCognitoUserData?.refresh_token

    const refresh_token_localStorage = getLocalStorageReadKeyObj('refresh_token')

    if (refresh_token_App) refresh_token = refresh_token_App
    else if (refresh_token_localStorage) refresh_token = refresh_token_localStorage

    if (!refresh_token) return

    const variables: QueryGetAuthAwsCognitoUserRefreshedArgs = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
        client_app: ClientAppEnumType['ACADEMY'],
      },
    }

    const authAwsCognitoUserData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['getAuthAwsCognitoUserRefreshed'],
      },
      {
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(
      actionSync.SET_AUTH_AWS_COGNITO_USER_DATA({
        authAwsCognitoUserData,
        source: 'getAuthAwsCognitoUserRefreshedSaga',
      })
    )
  } catch (error: any) {
    yield getLocalStorageSetObjTo({
      refresh_token: '',
      sub: '',
    })
    console.log('getAuthAwsCognitoUserRefreshedSaga [61] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getAuthAwsCognitoUserRefreshed = withDebounce(
  getAuthAwsCognitoUserRefreshedGenerator,
  10
)

/**
 * @description Function to getAuthAwsCognitoUserRefreshedSaga
 * @import import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
 */
export default function* getAuthAwsCognitoUserRefreshedSaga() {
  yield takeEvery(
    [actionAsync.GET_AUTH_AWS_COGNITO_USER_REFRESHED.REQUEST().type],
    getAuthAwsCognitoUserRefreshed
  )
}
