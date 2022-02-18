import { IRootStore, IUser, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_LAST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { user } = forms

  const profileNext: IUser = { ...user, userNameLast: data }

  const formsNext: IForms = { ...forms, user: profileNext }

  return { ...store, forms: formsNext }
}
