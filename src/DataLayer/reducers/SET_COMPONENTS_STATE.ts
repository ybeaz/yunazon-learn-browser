import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_COMPONENTS_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsStateProp, value } = data
  const { componentsState } = store
  const componentsStateNext: any = {
    ...componentsState,
    [componentsStateProp]: value,
  }
  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
