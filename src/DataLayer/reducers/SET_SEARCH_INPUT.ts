import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_SEARCH_INPUT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store

  const { searchInputIn } = data

  const { searchInput } = forms
  const searchInputNext = !!searchInputIn ? searchInputIn : searchInput
  const formsNext = { ...forms, searchInput: searchInputNext }

  return { ...store, forms: formsNext }
}
