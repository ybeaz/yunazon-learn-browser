import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_LAST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    lastName: data,
  }
  return { ...store, forms: nextForms }
}
