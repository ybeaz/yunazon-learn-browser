import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_STORE_STATE: ReducerType = (
  store: RootStoreType,
  data: RootStoreType
): RootStoreType => {
  return data
}
