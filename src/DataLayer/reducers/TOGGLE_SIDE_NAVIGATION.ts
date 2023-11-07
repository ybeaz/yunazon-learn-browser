import { IRootStore } from '../../Interfaces/IRootStore'

export const TOGGLE_SIDE_NAVIGATION: Function = (
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
