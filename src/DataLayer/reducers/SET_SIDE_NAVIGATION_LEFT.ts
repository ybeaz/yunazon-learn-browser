import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_SIDE_NAVIGATION_LEFT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const isSideNavLeftVisibleIn = data?.isSideNavLeftVisible

  const { componentsState } = store
  const { isSideNavLeftVisible: isSideNavLeftVisibleStore } = componentsState

  let isSideNavLeftVisible = !isSideNavLeftVisibleStore
  if (isSideNavLeftVisibleIn !== undefined)
    isSideNavLeftVisible = isSideNavLeftVisibleIn

  const componentsStateNext = {
    ...componentsState,
    isSideNavLeftVisible,
  }
  return { ...store, componentsState: componentsStateNext }
}
