import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_PAGINATION_OFFSET: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { paginationName, offset } = data
  const { componentsState } = store
  const componentsStateNext: any = {
    ...componentsState,
  }
  componentsStateNext.pagination[paginationName].offset = offset

  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
