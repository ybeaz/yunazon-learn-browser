import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_IS_LOADED_LOCAL_STORAGE_STORE_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isLoadedLocalStorageStoreState: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
