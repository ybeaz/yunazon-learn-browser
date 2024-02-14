import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ADD_DOCUMENT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { documents } = store

  let documentsNext = documents
  const documentFound = documents.find(
    (document: any) => document.documentID === data.documentID
  )
  if (!documentFound) {
    documentsNext = [...documents, data]
  }
  return {
    ...store,
    documents: documentsNext,
  }
}
