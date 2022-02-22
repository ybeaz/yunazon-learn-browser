import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USER_PROFILE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { userWebTokenAuth } = data

  getSetObjToLocalStorage({ userWebTokenAuth })

  const { forms } = store

  const { user } = forms

  const userPhone = user.userPhone ? user.userPhone : null

  const userNext = { ...user, ...data, userPhone }

  const formsNext = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
