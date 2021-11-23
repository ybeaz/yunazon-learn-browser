import { IRootStore } from '../../Interfaces/IRootStore'

export const SEP_SELECT_GENDER_REQUIRED: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { searchFormSep } = forms
  const searchFormSepNext = { ...searchFormSep, selectGenderRequired: data }
  const formsNext = { ...forms, searchFormSep: searchFormSepNext }
  return { ...store, forms: formsNext }
}
