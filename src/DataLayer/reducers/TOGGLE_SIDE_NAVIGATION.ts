import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_SIDE_NAVIGATION: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const { isSideNavVisible } = componentsState
  const componentsStateNext = {
    ...componentsState,
    isSideNavVisible: !isSideNavVisible,
  }
  return { ...store, componentsState: componentsStateNext }
}
