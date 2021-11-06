import { IRootStore } from '../../Interfaces/IRootStore'

export const SEP_SELECT_SORT_BY: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { catalogSep } = forms
  const catalogSepNext = { ...catalogSep, selectSortBy: data }
  const formsNext = { ...forms, catalogSep: catalogSepNext }
  return { ...store, forms: formsNext }
}
