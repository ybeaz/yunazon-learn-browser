import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_SEARCH_INPUT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store

  const { inputSearchIn } = data

  const { inputSearch } = forms
  const inputSearchNext = !!inputSearchIn ? inputSearchIn : inputSearch
  const formsNext = { ...forms, inputSearch: inputSearchNext }

  return { ...store, forms: formsNext }
}
