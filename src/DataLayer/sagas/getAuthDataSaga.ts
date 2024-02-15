import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'
import { getProfileData } from './getProfileDataSaga'
import { getRedirected } from '../../Shared/getRedirected'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { getLocalStorageDeletedObjFrom } from '../../Shared/getLocalStorageDeletedObjFrom'
import { withDebounce } from '../../Shared/withDebounce'

function* getAuthDataGenerator(params: ActionReduxType | any): Iterable<any> {
  try {
    const languageLocalStorage = getLocalStorageReadKeyObj('language')

    if (languageLocalStorage) {
      yield put(actionSync.SELECT_LANGUAGE_APP(languageLocalStorage))
    }

    const query = getParsedUrlQueryBrowserApi()
    const code = query?.code

    if (code) {
      yield call(getAuthAwsCognitoUserData, { data: { code } })
      yield call(getProfileData)

      const redirectAuthFrom = getLocalStorageReadKeyObj('redirectAuthFrom')
      if (redirectAuthFrom) {
        getLocalStorageDeletedObjFrom({ redirectAuthFrom: null })

        getRedirected(redirectAuthFrom, {
          isOrigin: true,
          parentFunction: 'getAuthData [34]',
          printRes: false,
        })
      } else {
        getRedirected('/', {
          parentFunction: 'getAuthData [40]',
          printRes: false,
        })
      }
    } else {
      yield call(getAuthAwsCognitoUserRefreshed)
      yield call(getProfileData)
    }

    yield put(
      actionSync.SET_SIDE_NAVIGATION_LEFT({
        isSideNavLeftVisible: false,
      })
    )
  } catch (error: any) {
    console.info('getAuthData [53] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getAuthData = withDebounce(getAuthDataGenerator, 500)

export default function* getAuthDataSaga() {
  yield takeEvery([actionAsync.GET_AUTH_DATA.REQUEST().type], getAuthData)
}
