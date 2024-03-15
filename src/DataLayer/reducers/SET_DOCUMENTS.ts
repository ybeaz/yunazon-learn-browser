import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_DOCUMENTS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  return {
    ...store,
    documents: data,
  }
}
