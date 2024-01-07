import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getCourses } from './getCourses.saga'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'
import { paginationOffset } from '../../Constants/pagination.const'

function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  try {
    const query = getParsedUrlQueryBrowserApi()

    const inputSearch = query?.search || ''
    const tagsPick =
      (query && query?.tagspick && query?.tagspick.split(',')) || []
    const tagsOmit =
      (query && query?.tagsomit && query?.tagsomit.split(',')) || []
    const first =
      query && query?.page
        ? parseInt(query?.page, 10) * paginationOffset - paginationOffset
        : 0

    yield put(actionSync.ONCHANGE_SEARCH_INPUT(inputSearch))

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

    yield getCourses()
  } catch (error: any) {
    console.info('getMatrixData [31]', error.name + ': ' + error.message)
  }
}

export default function* getMatrixDataSaga() {
  yield takeEvery([actionAsync.GET_MATRIX_DATA.REQUEST().type], getMatrixData)
}
