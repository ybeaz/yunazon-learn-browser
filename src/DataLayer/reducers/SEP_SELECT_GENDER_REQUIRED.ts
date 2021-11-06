import { IRootStore } from '../../Interfaces/IRootStore'

export const SEP_SELECT_GENDER_REQUIRED: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { catalogSep } = forms
  const catalogSepNext = { ...catalogSep, selectGenderRequired: data }
  const formsNext = { ...forms, catalogSep: catalogSepNext }
  return { ...store, forms: formsNext }
}
