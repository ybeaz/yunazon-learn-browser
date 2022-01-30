import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_INFO_ABOUT: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms
  const profileNext = { ...profile, userInfoAbout: data }

  const nextForms = {
    ...forms,
    profile: profileNext,
  }
  return { ...store, forms: nextForms }
}
