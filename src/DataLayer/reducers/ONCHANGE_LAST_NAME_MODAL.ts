import { IRootStore, IForms } from '../../Interfaces/IRootStore'
import { IUser } from '../../Interfaces/IUser'

export const ONCHANGE_LAST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { user } = forms

  const userNext: IUser = { ...user, userNameLast: data }

  const formsNext: IForms = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
