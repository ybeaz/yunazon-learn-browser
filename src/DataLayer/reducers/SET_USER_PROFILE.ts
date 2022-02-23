import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USER_PROFILE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { userWebTokenAuth } = data
  const { calledFrom, ...restData } = data

  /** @description userWebTokenAuth is set once and unset with AUTH_SIGN_OUT */
  if (userWebTokenAuth) getSetObjToLocalStorage({ userWebTokenAuth })
  if (calledFrom === 'AUTH_SIGN_OUT')
    getSetObjToLocalStorage({ userWebTokenAuth: null })

  const { forms } = store

  const { user } = forms

  const userPhone = user.userPhone ? user.userPhone : null

  const userNext = { ...user, ...restData, userPhone }

  const formsNext = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
