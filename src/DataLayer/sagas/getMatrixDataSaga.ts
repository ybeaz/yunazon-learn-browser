import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { PAGINATION_OFFSET } from '../../Constants/pagination.const'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

export function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    ;['modulesSearch'].forEach((searchParamsName: string) => {
      const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
        searchParamsName,
        searchParamsValue: '',
      }
      getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)
    })

    const urlQuery = getSetUrlQueryBrowserApi(undefined)

    /* Setting up tag page cursor*/
    let firstPageTags: number = 0
    if (urlQuery?.query && PaginationNameEnumType['pageTags'] in urlQuery.query) {
      firstPageTags =
        (parseInt(urlQuery.query[PaginationNameEnumType['pageTags']], 10) - 1) *
        PAGINATION_OFFSET['pageTags']
      yield put(
        actionSync.SET_PAGE_CURSOR({
          paginationName: PaginationNameEnumType['pageTags'],
          first: firstPageTags,
        })
      )
    }

    /* Setting up modules page cursor*/
    let firstPageModules = 0
    if (urlQuery?.query && PaginationNameEnumType['pageModules'] in urlQuery.query) {
      firstPageModules =
        (parseInt(urlQuery.query[PaginationNameEnumType['pageModules']], 10) - 1) *
        PAGINATION_OFFSET['pageModules']
      yield put(
        actionSync.SET_PAGE_CURSOR({
          paginationName: PaginationNameEnumType['pageModules'],
          first: firstPageModules,
        })
      )
    }

    yield put(actionAsync.GET_MODULES.REQUEST({ isLoaderOverlay: false }))

    yield put(actionAsync.READ_TAGS_CONNECTION.REQUEST({ isLoaderOverlay: false }))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getMatrixData [46] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* getMatrixDataSaga() {
  yield takeEvery([actionAsync.GET_MATRIX_DATA.REQUEST().type], getMatrixData)
}
