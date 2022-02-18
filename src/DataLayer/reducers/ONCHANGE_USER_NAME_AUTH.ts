import { IRootStore, IUser, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_NAME_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const userNext: IUser = { ...user, userNameFirst: data }

  const formsNext: IForms = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
