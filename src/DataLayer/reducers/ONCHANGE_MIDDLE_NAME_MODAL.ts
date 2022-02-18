import { IRootStore, IUser, IForms } from '../../Interfaces/IRootStore'

export const ONCHANGE_MIDDLE_NAME_MODAL: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store

  const { profile } = forms

  const profileNext: IUser = { ...profile, userNameMiddle: data }

  const formsNext: IForms = { ...forms, profile: profileNext }

  return { ...store, forms: formsNext }
}
