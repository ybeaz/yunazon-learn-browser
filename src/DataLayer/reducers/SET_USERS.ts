import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USERS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  return { ...store, users: data }
}
