import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_PASSWORD_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { user } = forms

  const userNext = { ...user, passwordAuth: data }

  const nextForms = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
