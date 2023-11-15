import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_MODULE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { readModule } = data
  return { ...store, moduleActive: readModule }
}
