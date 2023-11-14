import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_USERS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  return { ...store, users: data }
}
