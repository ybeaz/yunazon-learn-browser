import { IRootStore } from '../../Interfaces/IRootStore'

export const ONCHANGE_USER_NAME_AUTH: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    userNameAuth: data,
  }
  return { ...store, forms: nextForms }
}
