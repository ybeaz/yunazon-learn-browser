import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USER: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const userNext = data
  return { ...store, user: userNext }
}
