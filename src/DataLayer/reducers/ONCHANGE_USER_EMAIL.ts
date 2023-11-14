import { IForms, IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'
import { IUser } from '../../Interfaces/IUser'

export const ONCHANGE_USER_EMAIL: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms

  const userNext: IUser = { ...user, userEmail: data }

  const nextForms: IForms = {
    ...forms,
    user: userNext,
  }
  return { ...store, forms: nextForms }
}
