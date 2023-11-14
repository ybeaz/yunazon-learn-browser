import { FormsType, RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { UserType } from '../../Interfaces/UserType'

export const ONCHANGE_USER_EMAIL: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms

  const userNext: UserType = { ...user, userEmail: data }

  const nextForms: FormsType = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
