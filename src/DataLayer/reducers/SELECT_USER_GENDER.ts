import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_USER_GENDER: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms
  const profileNext = { ...profile, userGender: data }
  const formsNext = { ...forms, profile: profileNext }
  return { ...store, forms: formsNext }
}
