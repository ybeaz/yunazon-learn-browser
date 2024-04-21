import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryGetAuthAwsCognitoUserRefreshedArgs } from '../../@types/GraphqlTypes'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { ClientAppType } from '../../@types/ClientAppType'
import { withDebounce } from '../../Shared/withDebounce'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getModules } from './getModulesSaga'

let authAwsCognitoRefresheredCounter: number = 0

export function* getAuthAwsCognitoUserRefreshedGenerator(): Iterable<any> {
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

    const variables: QueryGetAuthAwsCognitoUserRefreshedArgs = {
      userIdDataAwsCognitoInput: {
        refresh_token,
        redirect_uri,
        client_app: ClientAppType['ACADEMY'],
      },
    }

    const authAwsCognitoUserData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'getAuthAwsCognitoUserRefreshed',
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

    /* Crutch for before deployment to the server in the US */
    authAwsCognitoRefresheredCounter += 1
    if (authAwsCognitoRefresheredCounter === 1) {
      yield getModules()
    }
  } catch (error: any) {
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
