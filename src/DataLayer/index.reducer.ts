import { Reducer, Action, ReducersMapObject } from 'redux'

import { RootStoreType } from '../Interfaces/RootStoreType'

import * as Reduces from './reducers/'

import { rootStoreDefault } from './rootStoreDefault'

export type IndexReducerType =
  | Reducer<RootStoreType, Action<any>>
  | ReducersMapObject<RootStoreType, Action<any>>

export const indexReducer: IndexReducerType = (
  store = rootStoreDefault,
  action = { type: 'DEFAULT' }
) => {
  // @ts-expect-error
  const { type, data } = action

  const reduces: Record<string, any> = Reduces

  return reduces[type] ? reduces[type](store, data) : store
}
