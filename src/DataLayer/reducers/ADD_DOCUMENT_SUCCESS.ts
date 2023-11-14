import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ADD_DOCUMENT_SUCCESS: ReducerType = (
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
