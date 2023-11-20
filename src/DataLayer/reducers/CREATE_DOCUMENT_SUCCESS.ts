import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const CREATE_DOCUMENT_SUCCESS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
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
