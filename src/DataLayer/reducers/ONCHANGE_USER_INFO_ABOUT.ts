import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_INFO_ABOUT: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const profileNext = { ...user, userInfoAbout: data }

  const nextForms = {
    ...forms,
    user: profileNext,
  }
  return { ...store, forms: nextForms }
}
