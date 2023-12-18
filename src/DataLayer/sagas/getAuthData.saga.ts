import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { getSizeWindow } from '../../Shared/getSizeWindow'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'
import { getLocalStorageStoreStateRead } from '../../Shared/getLocalStorageStoreStateRead'
import { getRedirected } from '../../Shared/getRedirected'
import { isLoadingLocalStorageStoreState } from '../../FeatureFlags'
import { getCourses } from './getCourses.saga'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { paginationOffset } from '../../Constants/pagination.const'

function* getAuthData(params: ActionReduxType | any): Iterable<any> {
  try {
    const query = getParsedUrlQueryBrowserApi()
    const code = query?.code

    if (code) {
      yield call(getAuthAwsCognitoUserData, { data: { code } })
      getRedirected('/')
    } else {
      yield call(getAuthAwsCognitoUserRefreshed)
    }
  } catch (error: any) {
    console.info('getAuthData [31]', error.name + ': ' + error.message)
  }
}

export default function* getAuthDataSaga() {
  yield takeEvery([actionAsync.GET_AUTH_DATA.REQUEST().type], getAuthData)
}
