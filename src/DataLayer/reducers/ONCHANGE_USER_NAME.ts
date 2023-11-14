import { RootStoreType, FormsType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { UserType } from '../../Interfaces/UserType'

export const ONCHANGE_USER_NAME: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms

  const userNext: UserType = { ...user, userName: data }

  const formsNext: FormsType = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
