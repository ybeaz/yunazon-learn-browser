import { IRootStore } from '../../Interfaces/IRootStore'

export const ADD_DOCUMENT_SUCCESS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { documents, componentsState } = store
  const documentsNext = [...documents, data]
  const componentsStateNext = {
    ...componentsState,
    isDocumentAdded: true,
  }
  return {
    ...store,
    documents: documentsNext,
    componentsState: componentsStateNext,
  }
}
