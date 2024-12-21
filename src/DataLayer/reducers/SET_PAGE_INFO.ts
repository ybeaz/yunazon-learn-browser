import { ReducerType } from '../../Interfaces/ReducerType'
import { RootStoreType, PaginationDict } from '../../Interfaces/RootStoreType'
import { PaginationNameEnumType } from 'yourails_common'
import { PaginationType } from 'yourails_common'

export const SET_PAGE_INFO: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { componentsState } = store
  const pagination: PaginationDict = componentsState.pagination

  const { hasNextPage, endCursor } = data
  const paginationName: PaginationNameEnumType = data.paginationName
  const paginationSlice: PaginationType = pagination[paginationName]

  const paginationNext = {
    ...pagination,
    [paginationName]: { ...paginationSlice, hasNextPage, endCursor },
  }

  const componentsStateNext = { ...componentsState, pagination: paginationNext }

  return { ...store, componentsState: componentsStateNext }
}
