import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getModules } from './getModulesSaga'
import { readTagsConnection } from './readTagsConnectionSaga'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { PAGINATION_OFFSET } from '../../Constants/pagination.const'

export function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  const tagsNum = params?.data?.tagsNum
  const modulesNum = params?.data?.modulesNum

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const query = getParsedUrlQueryBrowserApi()

    const search: any = {
      modulesSearch: query?.modulesSearch || '',
      tagsSearch: query?.tagsSearch || '',
    }
    const tagsPick = (query && query?.tagsPick && query?.tagsPick.split(',')) || []
    const tagsOmit = (query && query?.tagsOmit && query?.tagsOmit.split(',')) || []
    const firstPageModules =
      query && query?.[PaginationNameEnumType['pageModules']]
        ? parseInt(query?.[PaginationNameEnumType['pageModules']], 10) *
            PAGINATION_OFFSET[PaginationNameEnumType['pageModules']] -
          PAGINATION_OFFSET[PaginationNameEnumType['pageModules']]
        : 0

    Object.keys(search).forEach(searchQuery => {})

    for (const searchQueryName in search) {
      const data = {
        storeFormProp: searchQueryName,
        value: search[searchQueryName],
      }
      yield put(actionSync.SET_INPUT_TO_STORE(data))
    }

    yield put(
      actionSync.SET_TAGS_STATE({
        tagsPick,
        tagsOmit,
      })
    )

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageTags'],
        first: 0,
      })
    )

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageModules'],
        first: firstPageModules,
      })
    )

    yield getModules({ data: { isLoaderOverlay: false } })

    yield readTagsConnection({ data: { isLoaderOverlay: false } })

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getMatrixData [46] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* getMatrixDataSaga() {
  yield takeEvery([actionAsync.GET_MATRIX_DATA.REQUEST().type], getMatrixData)
}
