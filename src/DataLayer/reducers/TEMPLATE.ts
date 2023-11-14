import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TEMPLATE: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  return store
}
