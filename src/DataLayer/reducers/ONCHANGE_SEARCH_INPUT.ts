import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_SEARCH_INPUT: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    searchInput: data,
  }
  return { ...store, forms: nextForms }
}
