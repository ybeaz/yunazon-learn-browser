import { IRootStore } from '../../Interfaces/IRootStore'

export const TOGGLE_MODAL_FRAME: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isModalFrameVisible: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
