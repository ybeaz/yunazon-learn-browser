import { RootStoreType, FormsType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { UserType } from '../../Interfaces/UserType'

export const ONCHANGE_FIRST_NAME_MODAL: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store

  const { user } = forms

  const userNext: UserType = { ...user, nameFirst: data }

  const formsNext: FormsType = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
