import { RootStoreType } from './RootStoreType'

export interface ReducerType {
  (store: RootStoreType, data: any): RootStoreType
}
