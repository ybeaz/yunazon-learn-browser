import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_USER_COUNTRY: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const profileNext = { ...user, userCountry: data }
  const formsNext = { ...forms, user: profileNext }
  return { ...store, forms: formsNext }
}
