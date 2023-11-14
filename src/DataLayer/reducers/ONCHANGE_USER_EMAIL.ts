import { FormsType, RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { IUser } from '../../Interfaces/IUser'

export const ONCHANGE_USER_EMAIL: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms

  const userNext: IUser = { ...user, userEmail: data }

  const nextForms: FormsType = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
