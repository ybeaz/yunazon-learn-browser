import { getUniqArrDeep } from '../../Shared/getUniqArrDeep'
import { getUpdatedArrByArrInput } from '../../Shared/getUpdatedArrByArrInput'
import { IRootStore } from '../../Interfaces/IRootStore'
// import { getFilteredArrByIsActive } from '../../Shared/getFilteredArrByIsActive'
// import { getReducedArrByElem } from '../../Shared/getReducedArrByElem'

export const SET_MODAL_FRAMES: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const { modalFrames } = componentsState

  let modaleFramesNext = modalFrames.map(item => ({ ...item, isActive: false }))
  if (data.length > 0) {
    modaleFramesNext = getUniqArrDeep(modalFrames)
    modaleFramesNext = getUpdatedArrByArrInput(
      modaleFramesNext,
      data,
      'childName'
    )
  }

  const componentsStateNext = {
    ...componentsState,
    modalFrames: modaleFramesNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
