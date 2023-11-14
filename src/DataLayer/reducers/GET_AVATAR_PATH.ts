import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const GET_AVATAR_PATH: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const userNext = { ...user, userAvatar: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
