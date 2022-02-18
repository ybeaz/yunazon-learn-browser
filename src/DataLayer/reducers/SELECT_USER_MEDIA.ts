import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_USER_MEDIA: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const profileNext = { ...user, userMedia: data }
  const formsNext = { ...forms, user: profileNext }
  return { ...store, forms: formsNext }
}
