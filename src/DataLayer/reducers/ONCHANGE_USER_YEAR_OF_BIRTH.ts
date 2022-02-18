import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_YEAR_OF_BIRTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userYearOfBirth: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
