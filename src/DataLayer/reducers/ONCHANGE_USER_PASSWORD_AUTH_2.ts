import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_PASSWORD_AUTH_2: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { user } = forms

  const userNext = { ...user, userPasswordAuth2: data }

  const nextForms = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
