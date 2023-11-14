import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SELECT_LANGUAGE_APP: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  return { ...store, language: data }
}
