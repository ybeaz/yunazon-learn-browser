import { IUser, IForms, IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_EMAIL_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const profileNext: IUser = { ...user, userEmail: data }

  const nextForms: IForms = {
    ...forms,
    user: profileNext,
  }
  return { ...store, forms: nextForms }
}
