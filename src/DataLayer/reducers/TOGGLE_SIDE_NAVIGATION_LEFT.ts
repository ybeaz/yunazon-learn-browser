import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_SIDE_NAVIGATION_LEFT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const { isSideNavLeftVisible } = componentsState
  const componentsStateNext = {
    ...componentsState,
    isSideNavLeftVisible: !isSideNavLeftVisible,
  }
  return { ...store, componentsState: componentsStateNext }
}
