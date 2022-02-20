import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_BIRTH_YEAR: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const userBirthYear = data ? parseInt(data, 10) : data
  const userNext = { ...user, userBirthYear }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
