import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USER: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { webToken } = data

  getSetObjToLocalStorage({ authWebToken: webToken })
  return { ...store, user: data }
}
