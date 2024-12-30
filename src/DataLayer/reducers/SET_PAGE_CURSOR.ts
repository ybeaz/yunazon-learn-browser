import { ReducerType } from '../../Interfaces/ReducerType'
import { RootStoreType, PaginationDict } from '../../Interfaces/RootStoreType'
import { isNumber, PaginationNameEnumType } from 'yourails_common'
import { PaginationType } from 'yourails_common'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'
import { PAGINATION_OFFSET } from 'yourails_common'

export const SET_PAGE_CURSOR: ReducerType = (
  store: RootStoreType,
  data: {
    first: string | number
    paginationName: PaginationNameEnumType
    direction: 'init' | 'set' | 'next' | 'prev'
  }
): RootStoreType => {
  const { first: firstIn, direction = 'set', paginationName } = data

  const { componentsState } = store
  const pagination: PaginationDict = componentsState.pagination

  const paginationSlice: PaginationType = pagination[paginationName]

  const { first: firstState = 0, offset, hasNextPage } = paginationSlice

  /**
   * @description firstState, firstNext are in numbers of entities on the page: 0, 10, 20, etc.
   *              firstIn and searchParamsValue is in numbers of offsets: 1, 2, 3, etc.
   */

  let firstNext: number = 0
  const firstInNumber =
    typeof firstIn === 'string'
      ? parseInt(firstIn, 10)
      : (typeof firstIn === 'number' && firstIn) || 0
  if (firstIn) firstNext = firstInNumber > 0 ? (firstInNumber - 1) * offset : 0
  else if (firstState) firstNext = firstState

  if (direction === 'init') firstNext = 0
  else if (direction === 'set') firstNext = firstNext
  else if (direction === 'next' && hasNextPage) firstNext = firstNext + offset
  else if (direction === 'prev' && firstNext >= 1) firstNext = firstNext - offset

  const paginationNext = {
    ...pagination,
    [paginationName]: { ...paginationSlice, first: firstNext },
  }

  const componentsStateNext = { ...componentsState, pagination: paginationNext }

  let searchParamsValue: string = '1'
  if (firstNext === 0 || firstNext === 1) {
    searchParamsValue = '1'
  } else {
    searchParamsValue = String((firstNext + offset) / offset)
  }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: paginationName,
    searchParamsValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  return { ...store, componentsState: componentsStateNext }
}
