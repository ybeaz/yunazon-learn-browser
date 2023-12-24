import { getLocalStorageSetObjTo } from '../../Shared/getLocalStorageSetObjTo'
import { ReducerType } from '../../Interfaces/ReducerType'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { UserType } from '../../Interfaces/UserType'
import { userStoreDefault } from '../../DataLayer/rootStoreDefault'

export const SET_USER_PROFILE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { userIdAuth, userWebTokenAuth } = data
  const { calledFrom, ...dataRest } = data

  const { forms } = store

  const { user } = forms

  const userPhone = user.userPhone ? user.userPhone : null

  /** @description userWebTokenAuth is set once */
  if (userWebTokenAuth)
    getLocalStorageSetObjTo({
      source: 'SET_USER_PROFILE [21]',
      userWebTokenAuth,
    })

  let userNext: UserType
  if (calledFrom === 'AUTH_SIGN_OUT') {
    /** @description Set userWebTokenAuth null if it comes from AUTH_SIGN_OUT */
    getLocalStorageSetObjTo({
      source: 'SET_USER_PROFILE [26]',
      userWebTokenAuth: null,
    })
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
