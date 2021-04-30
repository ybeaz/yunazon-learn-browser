import { IRootStore } from '../../Interfaces/IRootStore'

export const TOGGLE_IS_DOCUMENT_ADDED: Function = (
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
