import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_SIDE_NAVIGATION: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const { isSideNavVisible } = componentsState
  const componentsStateNext = {
    ...componentsState,
    isSideNavVisible: !isSideNavVisible,
  }
  return { ...store, componentsState: componentsStateNext }
}
