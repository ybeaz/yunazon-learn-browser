import { componentsStateDefault } from '../rootStoreDefault'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrDeep } from 'yourails_common'
import { getUpdatedArrByArrInput } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'

export const SET_MODAL_FRAMES: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { componentsState } = store
  const { modalFrames } = componentsState

  let modaleFramesNext = modalFrames.map(item => ({ ...item, isActive: false }))

  if (data.length > 0) {
    modaleFramesNext = getUniqArrDeep(modalFrames)
    modaleFramesNext = getUpdatedArrByArrInput(modaleFramesNext, data, 'childName')
  } else {
    modaleFramesNext = componentsStateDefault.modalFrames
  }

  const componentsStateNext = {
    ...componentsState,
    modalFrames: modaleFramesNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
