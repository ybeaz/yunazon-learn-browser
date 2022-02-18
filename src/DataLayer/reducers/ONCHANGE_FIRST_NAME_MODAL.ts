import { IRootStore, IUser, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_FIRST_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { profile } = forms

  const profileNext: IUser = { ...profile, userNameFirst: data }

  const formsNext: IForms = { ...forms, profile: profileNext }

  return { ...store, forms: formsNext }
}
