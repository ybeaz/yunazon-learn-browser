import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_PASSWORD_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    passwordAuth: data,
  }
  return { ...store, forms: nextForms }
}
