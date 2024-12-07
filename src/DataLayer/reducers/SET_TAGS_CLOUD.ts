import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_TAGS_CLOUD: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { tagsCloud } = data
  const storeNext = { ...store, tagsCloud }
  return storeNext
}
