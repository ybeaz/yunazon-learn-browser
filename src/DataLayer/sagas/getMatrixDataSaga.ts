import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getModules } from './getModulesSaga'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { PAGINATION_OFFSET } from '../../Constants/pagination.const'

export function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  try {
    const query = getParsedUrlQueryBrowserApi()

    const inputSearch = query?.search || ''
    const tagsPick = (query && query?.tagsPick && query?.tagsPick.split(',')) || []
    const tagsOmit = (query && query?.tagsOmit && query?.tagsOmit.split(',')) || []
    const first =
      query && query?.[PaginationNameEnumType['pageModules']]
        ? parseInt(query?.[PaginationNameEnumType['pageModules']], 10) *
            PAGINATION_OFFSET[PaginationNameEnumType['pageModules']] -
          PAGINATION_OFFSET[PaginationNameEnumType['pageModules']]
        : 0

    const data = {
      storeFormProp: 'inputSearch',
      value: inputSearch,
    }
    yield put(actionSync.SET_INPUT_TO_STORE(data))

    yield put(
      actionSync.SET_TAGS_STATE({
        tagsPick,
        tagsOmit,
      })
    )

    yield put(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageModules'],
        first,
      })
    )

    yield getModules()
  } catch (error: any) {
    console.info('getMatrixData [46] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* getMatrixDataSaga() {
  yield takeEvery([actionAsync.GET_MATRIX_DATA.REQUEST().type], getMatrixData)
}
