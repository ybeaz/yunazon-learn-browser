import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { CourseType, ModuleType } from '../../@types/GraphqlTypes.d'

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
