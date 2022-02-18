import { IUser, IForms, IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_EMAIL_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms

  const profileNext: IUser = { ...profile, userEmail: data }

  const nextForms: IForms = {
    ...forms,
    profile: profileNext,
  }
  return { ...store, forms: nextForms }
}
