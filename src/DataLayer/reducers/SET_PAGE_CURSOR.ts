import { ReducerType } from '../../Interfaces/ReducerType'
import {
  RootStoreType,
  PaginationDict,
  PaginationNameEnumType,
} from '../../Interfaces/RootStoreType'
import { PaginationType } from '../../Interfaces'

export const SET_PAGE_CURSOR: ReducerType = (
  store: RootStoreType,
  data: any
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

  return { ...store, componentsState: componentsStateNext }
}
