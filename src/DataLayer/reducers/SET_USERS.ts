import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_USERS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  console.info('SET_USERS [7]', { data })
  return { ...store, users: data }
}
