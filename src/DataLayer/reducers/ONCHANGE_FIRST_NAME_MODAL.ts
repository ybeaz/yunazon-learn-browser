import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_FIRST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    firstName: data,
  }
  return { ...store, forms: nextForms }
}
