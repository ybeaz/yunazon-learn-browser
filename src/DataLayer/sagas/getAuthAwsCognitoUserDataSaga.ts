import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryGetAuthAwsCognitoUserDataArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from 'yourails_common'
import { getDetectedEnv } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { ClientAppEnumType } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { readModulesConnection } from './readModulesConnectionSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* getAuthAwsCognitoUserDataGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { code },
  } = params

  const envType = getDetectedEnv()
  const redirect_uri = CLIENTS_URI[envType]

  const variables: QueryGetAuthAwsCognitoUserDataArgs = {
    userIdDataAwsCognitoInput: {
      code,
      redirect_uri,
      client_app: ClientAppEnumType['ACADEMY'],
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

  yield readModulesConnection()
}

export const getAuthAwsCognitoUserData = withTryCatchFinallySaga(
  getAuthAwsCognitoUserDataGenerator,
  {
    optionsDefault: { funcParent: 'getAuthAwsCognitoUserDataSaga' },
    resDefault: [],
  }
)

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
