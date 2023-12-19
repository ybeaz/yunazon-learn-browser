import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'

export const SET_DOCUMENTS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  let storeNext = { ...store, documents: data }

  return storeNext
}
