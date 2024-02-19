import { takeEvery, call, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'
import { getProfile } from './getProfileSaga'
import { getRedirected } from '../../Shared/getRedirected'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { getLocalStorageDeletedObjFrom } from '../../Shared/getLocalStorageDeletedObjFrom'
import { withDebounce } from '../../Shared/withDebounce'
import { getArrayItemByProp } from '../../Shared/getArrayItemByProp'

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
    }

    let stateSelected: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )

    const {
      authAwsCognitoUserData: { sub },
    } = stateSelected as RootStoreType

    console.info('getAuthDataSaga [57]', { sub })
    if (sub) {
      yield call(getProfile, { data: { userID: sub } })

      /* Set default names to forms input */
      stateSelected = yield select((state: RootStoreType) => state)
      const { profiles } = stateSelected as RootStoreType

      const { nameFirst, nameMiddle, nameLast } = getArrayItemByProp({
        arr: profiles,
        propName: 'userID',
        propValue: sub,
      })

      yield put(
        actionSync.ONCHANGE_FORMS_GROUP_PROP({
          storeFormGroup: 'profileActive',
          storeFormProp: 'nameFirst',
          value: nameFirst || '',
        })
      )

      yield put(
        actionSync.ONCHANGE_FORMS_GROUP_PROP({
          storeFormGroup: 'profileActive',
          storeFormProp: 'nameMiddle',
          value: nameMiddle || '',
        })
      )

      yield put(
        actionSync.ONCHANGE_FORMS_GROUP_PROP({
          storeFormGroup: 'profileActive',
          storeFormProp: 'nameLast',
          value: nameLast || '',
        })
      )
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
