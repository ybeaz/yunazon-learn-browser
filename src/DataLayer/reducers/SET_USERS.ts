import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_USERS: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  return { ...store, users: data }
}
