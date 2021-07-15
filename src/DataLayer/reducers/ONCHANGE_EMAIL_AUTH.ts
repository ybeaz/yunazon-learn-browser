import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_EMAIL_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    emailAuth: data,
  }
  return { ...store, forms: nextForms }
}
