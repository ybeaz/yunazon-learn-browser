import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_USER_COUNTRY: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userLocaleCountry: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
