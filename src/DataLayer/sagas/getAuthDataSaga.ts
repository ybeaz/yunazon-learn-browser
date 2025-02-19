import { takeEvery, call, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getAuthAwsCognitoUserData } from './getAuthAwsCognitoUserDataSaga'
import { getAuthAwsCognitoUserRefreshed } from './getAuthAwsCognitoUserRefreshedSaga'
import { readProfile } from './readProfileSaga'
import { createProfile } from './createProfileSaga'
import { getRedirected } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { getLocalStorageReadKeyObj } from 'yourails_common'
import { getLocalStorageDeletedObjFrom } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* getAuthDataGenerator(params: ActionReduxType | any): Iterable<any> {
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
      })
    } else {
      getRedirected('/', {
        parentFunction: 'getAuthData [40]',
      })
    }
  } else {
    yield call(getAuthAwsCognitoUserRefreshed)
  }

  let stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    authAwsCognitoUserData: { sub, email },
  } = stateSelected as RootStoreType

  if (sub) {
    const profile: any = yield call(readProfile, { data: { userID: sub } })

    let nameFirst = profile?.nameFirst
    let nameMiddle = profile?.nameMiddle
    let nameLast = profile?.nameLast

    if (!nameFirst && !nameLast) {
      const profile2: any = yield call(createProfile, {
        data: { sub, email },
      })
      nameFirst = profile2?.nameFirst
      nameMiddle = profile2?.nameMiddle
      nameLast = profile2?.nameLast
    }

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
}

export const getAuthData = withDebounce(
  withTryCatchFinallySaga(getAuthDataGenerator, {
    optionsDefault: { funcParent: 'getAuthDataSaga' },
    resDefault: [],
  }),
  500
)

export default function* getAuthDataSaga() {
  yield takeEvery([actionAsync.GET_AUTH_DATA.REQUEST().type], getAuthData)
}
