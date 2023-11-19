import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_SEARCH_INPUT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const nextForms = {
    ...forms,
    searchInput: data,
  }
  return { ...store, forms: nextForms }
}
