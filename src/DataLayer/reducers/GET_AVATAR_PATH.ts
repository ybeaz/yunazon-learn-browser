import { IRootStore } from '../../Interfaces/IRootStore'

export const GET_AVATAR_PATH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const profileNext = { ...user, avatar: data }
  const formsNext = { ...forms, user: profileNext }
  return { ...store, forms: formsNext }
}
