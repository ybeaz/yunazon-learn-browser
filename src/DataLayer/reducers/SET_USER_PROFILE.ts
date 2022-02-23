import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { IUser, IRootStore } from '../../Interfaces/IRootStore'
import { userStoreDefault } from '../../DataLayer/rootStoreDefault'

export const SET_USER_PROFILE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { userIdAuth, userWebTokenAuth } = data
  const { calledFrom, ...dataRest } = data

  const { forms } = store

  const { user } = forms

  const userPhone = user.userPhone ? user.userPhone : null

  /** @description userWebTokenAuth is set once */
  if (userWebTokenAuth) getSetObjToLocalStorage({ userWebTokenAuth })

  let userNext: IUser
  if (calledFrom === 'AUTH_SIGN_OUT') {
    /** @description Set userWebTokenAuth null if it comes from AUTH_SIGN_OUT */
    getSetObjToLocalStorage({ userWebTokenAuth: null })
    userNext = userStoreDefault
  } else if (!userIdAuth) {
    /** @description Preserve data(Next) if there is no associated profile */
    userNext = user
  } else {
    /** @description Common case */
    userNext = { ...user, ...dataRest, userPhone }
  }

  const formsNext = { ...forms, user: userNext, userPrev: userNext }

  return { ...store, forms: formsNext }
}
