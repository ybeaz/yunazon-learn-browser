import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_PASSWORD_AUTH_2: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    passwordAuth2: data,
  }
  return { ...store, forms: nextForms }
}
