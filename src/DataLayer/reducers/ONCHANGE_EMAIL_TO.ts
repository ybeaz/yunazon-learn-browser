import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_EMAIL_TO: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    sendTo: data,
  }
  return { ...store, forms: nextForms }
}
