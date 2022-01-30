import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_NAME_FIRST: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms
  const profileNext = { ...profile, userNameFirst: data }

  const nextForms = {
    ...forms,
    profile: profileNext,
  }
  return { ...store, forms: nextForms }
}
