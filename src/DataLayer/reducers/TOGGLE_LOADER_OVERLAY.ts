import { IRootStore } from '../../Interfaces/IRootStore'

export const TOGGLE_LOADER_OVERLAY: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isLoaderOverlayVisible: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
