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

function* initLoading(params: ActionReduxType | any): Iterable<any> {
  try {
    const query = getParsedUrlQueryBrowserApi()

    const searchInput = query?.search || ''
    const tagsPick =
      (query && query?.tagspick && query?.tagspick.split(',')) || []
    const tagsOmit =
      (query && query?.tagsomit && query?.tagsomit.split(',')) || []
    const first =
      query && query?.page
        ? parseInt(query?.page, 10) * paginationOffset - paginationOffset
        : 0

    console.info('initLoading.saga [26]', {
      searchInput,
      tagsPick,
      tagsOmit,
      first,
      query,
    })

    yield put(actionSync.ONCHANGE_SEARCH_INPUT(searchInput))

    yield put(
      actionSync.SET_TAGS_STATE({
        tagsPick,
        tagsOmit,
      })
    )

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pagesCourses'],
        first,
      })
    )

    const storeStateLocalStorage = getLocalStorageStoreStateRead()
    const languageLocalStorage = storeStateLocalStorage?.language

    if (storeStateLocalStorage) {
      if (isLoadingLocalStorageStoreState())
        yield put(actionSync.SET_STORE_STATE(storeStateLocalStorage))
      yield put(actionSync.SELECT_LANGUAGE_APP(languageLocalStorage))
    }
    yield put(actionSync.SET_IS_LOADED_LOCAL_STORAGE_STORE_STATE(true))

    const code = query?.code

    if (code) {
      yield call(getAuthAwsCognitoUserData, { data: { code } })
      getRedirected('/')
    } else {
      yield call(getAuthAwsCognitoUserRefreshed)
    }

    yield put(
      actionSync.SET_SIDE_NAVIGATION_LEFT({
        isSideNavLeftVisible: false,
      })
    )

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }

    yield getCourses({
      type: 'GET_COURSES_REQUEST',
    })
  } catch (error: any) {
    console.info('initLoading [31]', error.name + ': ' + error.message)
  }
}

export default function* initLoadingSaga() {
  yield takeEvery([actionAsync.INIT_LOADING.REQUEST().type], initLoading)
}
