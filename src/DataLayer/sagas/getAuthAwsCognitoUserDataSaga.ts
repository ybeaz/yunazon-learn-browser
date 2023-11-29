import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ClientAppType } from '../../@types/ClientAppType'
import { getLocalStorageStoreStateSet } from '../../Shared/getLocalStorageStoreStateSet'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'

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

    let store = yield select(store => store)

    // @ts-expect-error
    const storeNext = { ...store, authAwsCognitoUserData }
    getLocalStorageStoreStateSet(
      {
        source: 'getAuthAwsCognitoUserData [39]',
        storeState: storeNext,
      },
      { printRes: false }
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
