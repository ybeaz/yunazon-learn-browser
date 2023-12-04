// @ts-nocheck

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_PAGE_CURSOR: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  console.info('SET_PAGE_CURSOR [10]', data)

  return store
}
