import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_USER_PASSWORD_AUTH: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store

  const { user } = forms

  const userNext = { ...user, userPasswordAuth: data }

  const nextForms = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
