import { IRootStore, IUser, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_FIRST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { user } = forms

  const userNext: IUser = { ...user, userNameFirst: data }

  const formsNext: IForms = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
