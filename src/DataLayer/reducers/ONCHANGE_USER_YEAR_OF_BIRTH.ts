import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_YEAR_OF_BIRTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { profile } = forms
  const profileNext = { ...profile, userYearOfBirth: data }
  const formsNext = { ...forms, profile: profileNext }
  return { ...store, forms: formsNext }
}
