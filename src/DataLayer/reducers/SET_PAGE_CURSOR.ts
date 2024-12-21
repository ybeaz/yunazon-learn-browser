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
  const { first: firstIn, direction = 'next', paginationName } = data

  const { componentsState } = store
  const pagination: PaginationDict = componentsState.pagination

  // const paginationName: PaginationNameEnumType = data?.paginationName

  const paginationSlice: PaginationType = pagination[paginationName]

  const { first = 0, offset, hasNextPage } = paginationSlice

  // let firstNext = firstIn || 0
  let firstNext: number = (
    isNumber(firstIn || 0) ? firstIn : typeof firstIn === 'string' ? parseInt(firstIn, 10) : 0
  ) as number

  if (direction === 'init') firstNext = 0
  else if (direction === 'set') firstNext = firstNext * offset - offset
  else if (direction === 'next' && hasNextPage) firstNext = first + offset
  else if (direction === 'next' && !hasNextPage) firstNext = first
  else if (direction === 'prev' && first >= offset) firstNext = first - offset

  console.info('SET_PAGE_CURSOR reducer [35]', { firstNext, first, paginationName, direction })

  // const paginationName: PaginationNameEnumType = data.paginationName
  // const paginationSlice: PaginationType = pagination[paginationName]

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
