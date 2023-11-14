import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_LOADER_OVERLAY: ReducerType = (
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
