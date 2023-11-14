import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_IS_DOCUMENT_ADDED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
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
