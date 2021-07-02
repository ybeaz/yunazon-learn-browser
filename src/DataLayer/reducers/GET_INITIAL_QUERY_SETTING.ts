import { IRootStore } from '../../Interfaces/IRootStore'

export const GET_INITIAL_QUERY_SETTING: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { language, forms } = store

  const { languageIn, searchInputIn } = data
  const languageNext = !!languageIn ? languageIn : language

  const { searchInput } = forms
  const searchInputNext = !!searchInputIn ? searchInputIn : searchInput
  const formsNext = { ...forms, searchInput: searchInputNext }

  return { ...store, language: languageNext, forms: formsNext }
}
