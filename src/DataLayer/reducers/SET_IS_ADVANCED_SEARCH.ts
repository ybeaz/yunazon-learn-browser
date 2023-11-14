import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_IS_ADVANCED_SEARCH: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isSepAdvancedSearch: data,
  }
  return {
    ...store,
    componentsState: componentsStateNext,
  }
}
