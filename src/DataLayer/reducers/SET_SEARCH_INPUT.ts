import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_SEARCH_INPUT: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { searchInputIn } = data

  const { searchInput } = forms
  const searchInputNext = !!searchInputIn ? searchInputIn : searchInput
  const formsNext = { ...forms, searchInput: searchInputNext }

  return { ...store, forms: formsNext }
}
