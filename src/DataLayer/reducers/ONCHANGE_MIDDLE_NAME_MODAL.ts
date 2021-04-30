import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_MIDDLE_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    middleName: data,
  }
  return { ...store, forms: nextForms }
}
