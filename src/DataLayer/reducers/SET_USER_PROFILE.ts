import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USER_PROFILE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { webToken } = data

  getSetObjToLocalStorage({ authWebToken: webToken })

  const { forms } = store

  const formsNext = { ...forms, user: data }

  return { ...store, forms: formsNext }
}
