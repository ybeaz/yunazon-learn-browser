import { IRootStore, IUser, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_FIRST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { user } = forms

  const profileNext: IUser = { ...user, userNameFirst: data }

  const formsNext: IForms = { ...forms, user: profileNext }

  return { ...store, forms: formsNext }
}
