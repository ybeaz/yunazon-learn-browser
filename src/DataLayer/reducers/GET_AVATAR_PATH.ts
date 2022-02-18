import { IRootStore } from '../../Interfaces/IRootStore'

export const GET_AVATAR_PATH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const userNext = { ...user, userAvatar: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
