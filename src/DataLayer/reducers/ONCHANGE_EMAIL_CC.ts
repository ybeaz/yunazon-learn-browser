import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_EMAIL_CC: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    sendCc: data,
  }
  return { ...store, forms: nextForms }
}
