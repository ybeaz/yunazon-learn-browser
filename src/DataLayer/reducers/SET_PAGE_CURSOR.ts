import { ReducerType } from '../../Interfaces/ReducerType'
import { RootStoreType, PaginationDict } from '../../Interfaces/RootStoreType'
import { PaginationNameEnumType } from 'yourails_common'
import { PaginationType } from 'yourails_common'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'
import { PAGINATION_OFFSET } from 'yourails_common'

export const SET_PAGE_CURSOR: ReducerType = (
  store: RootStoreType,
  data: { first: number; paginationName: PaginationNameEnumType }
): RootStoreType => {
  const { componentsState } = store
  const pagination: PaginationDict = componentsState.pagination

  const { first: firstNext } = data

  const paginationName: PaginationNameEnumType = data.paginationName
  const paginationSlice: PaginationType = pagination[paginationName]

  const paginationNext = {
    ...pagination,
    [paginationName]: { ...paginationSlice, first: firstNext },
  }

  const componentsStateNext = { ...componentsState, pagination: paginationNext }

  let searchParamsValue: string = '1'
  if (firstNext && firstNext > 0) {
    searchParamsValue = String(
      (firstNext + PAGINATION_OFFSET[PaginationNameEnumType[paginationName]]) /
        PAGINATION_OFFSET[PaginationNameEnumType[paginationName]]
    )
  }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: paginationName,
    searchParamsValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  return { ...store, componentsState: componentsStateNext }
}
