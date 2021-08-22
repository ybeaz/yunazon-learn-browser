import { getUniqArrDeep } from '../../Shared/getUniqArrDeep'
import { getFilteredArrByIsActive } from '../../Shared/getFilteredArrByIsActive'
import { getReducedArrByElem } from '../../Shared/getReducedArrByElem'
import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_MODAL_FRAMES: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const { modalFrames } = componentsState

  // let modaleFramesNext = modalFrames.map(item => ({ ...item, isActive: false }))
  // if (data.length > 0) {
  //   // modaleFramesNext = [...modalFrames, ...data]
  //   modaleFramesNext = getUniqArrDeep(modalFrames)
  //   // modaleFramesNext = getFilteredArrByIsActive(modaleFramesNext, 'childName')
  //   modaleFramesNext = getReducedArrByElem(modaleFramesNext, data[0])
  //   modaleFramesNext = [...modaleFramesNext, ...data]
  // }

  let modaleFramesNext = modalFrames.map(item => ({ ...item, isActive: false }))
  if (data.length > 0) {
    modaleFramesNext = [...modalFrames, ...data]
    modaleFramesNext = getUniqArrDeep(modaleFramesNext)
    modaleFramesNext = getFilteredArrByIsActive(modaleFramesNext, 'childName')
  }

  const componentsStateNext = {
    ...componentsState,
    modalFrames: modaleFramesNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
