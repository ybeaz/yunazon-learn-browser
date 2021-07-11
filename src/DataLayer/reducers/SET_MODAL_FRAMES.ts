import { getFilteredArrByIsActive } from '../../Shared/getFilteredArrByIsActive'
import { getUniqArrDeep } from '../../Shared/getUniqArrDeep'
import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_MODAL_FRAMES: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const { modalFrames } = componentsState

  let modaleFramesNext = [...modalFrames, ...data]
  modaleFramesNext = getUniqArrDeep(modaleFramesNext)
  modaleFramesNext = getFilteredArrByIsActive(modaleFramesNext, 'childName')

  const componentsStateNext = {
    ...componentsState,
    modalFrames: modaleFramesNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
