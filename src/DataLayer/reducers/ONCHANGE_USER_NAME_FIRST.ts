import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_USER_NAME_FIRST: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userNameFirst: data }

  const nextForms = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
