import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const GET_AVATAR_PATH: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms

  const userNext = { ...user, userAvatar: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
