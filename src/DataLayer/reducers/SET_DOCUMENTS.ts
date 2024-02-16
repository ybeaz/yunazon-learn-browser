import { DocumentType } from '../../@types/GraphqlTypes'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrBy } from '../../Shared/getUniqArrBy'

export const SET_DOCUMENTS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { documents } = store
  const documentsNext = getUniqArrBy(
    ['documentID'],
    [...data, ...documents]
  ).filter((document: DocumentType) => document.isActive === true)

  return {
    ...store,
    documents: documentsNext,
  }
}
