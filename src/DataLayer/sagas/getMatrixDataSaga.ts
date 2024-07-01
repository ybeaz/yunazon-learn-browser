import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getModules } from './getModulesSaga'
import { readTagsConnection } from './readTagsConnectionSaga'
import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

export function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    ;[
      'modulesSearch',
      PaginationNameEnumType['pageTags'],
      PaginationNameEnumType['pageModules'],
    ].forEach((searchParamsName: string) => {
      const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
        searchParamsName,
        searchParamsValue: '',
      }
      getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)
    })

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageTags'],
        first: 0,
      })
    )

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageModules'],
        first: 0,
      })
    )

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
