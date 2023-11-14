import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SELECT_USER_MEDIA: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userMedia: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
