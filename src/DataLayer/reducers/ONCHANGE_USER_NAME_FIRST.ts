import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_NAME_FIRST: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const profileNext = { ...user, userNameFirst: data }

  const nextForms = {
    ...forms,
    user: profileNext,
  }
  return { ...store, forms: nextForms }
}
