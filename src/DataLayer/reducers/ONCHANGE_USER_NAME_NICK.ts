import { RootStoreType, FormsType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { IUser } from '../../Interfaces/IUser'

export const ONCHANGE_USER_NAME_NICK: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms

  const userNext: IUser = { ...user, userNameNick: data }

  const formsNext: FormsType = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
