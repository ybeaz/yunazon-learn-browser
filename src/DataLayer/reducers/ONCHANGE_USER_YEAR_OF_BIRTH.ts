import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_YEAR_OF_BIRTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const profileNext = { ...user, userYearOfBirth: data }
  const formsNext = { ...forms, user: profileNext }
  return { ...store, forms: formsNext }
}
