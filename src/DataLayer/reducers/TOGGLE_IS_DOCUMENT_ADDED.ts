import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_IS_DOCUMENT_ADDED: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isDocumentAdded: data,
  }
  return {
    ...store,
    componentsState: componentsStateNext,
  }
}
