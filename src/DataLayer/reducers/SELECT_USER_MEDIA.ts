import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_USER_MEDIA: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms
  const profileNext = { ...profile, userMedia: data }
  const formsNext = { ...forms, profile: profileNext }
  return { ...store, forms: formsNext }
}
