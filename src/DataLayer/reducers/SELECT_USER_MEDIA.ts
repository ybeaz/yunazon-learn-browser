import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_USER_MEDIA: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userMedia: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
