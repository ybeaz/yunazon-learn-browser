import { IRootStore } from '../../Interfaces/IRootStore'

export const GET_AVATAR_PATH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms

  const profileNext = { ...profile, avatar: data }
  const formsNext = { ...forms, profile: profileNext }
  return { ...store, forms: formsNext }
}
