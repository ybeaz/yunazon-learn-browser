import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

/* TODO: Add reducer content here, when we need user data */
export const SET_USERS: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  return { ...store }
}
