import { ReducerType } from '../../Interfaces/ReducerType'
import { RootStoreType } from '../../Interfaces/RootStoreType'

export const SET_SCREEN_ACTIVE: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { screenActive } = data

  const { componentsState } = store

  const componentsStateNext = {
    ...componentsState,
    screenActive,
  }
  return { ...store, componentsState: componentsStateNext }
}
