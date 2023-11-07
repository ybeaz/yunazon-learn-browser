import { IRootStore, IForms } from '../../Interfaces/IRootStore'
import { IUser } from '../../Interfaces/IUser'

export const ONCHANGE_USER_NAME: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const userNext: IUser = { ...user, userName: data }

  const formsNext: IForms = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
