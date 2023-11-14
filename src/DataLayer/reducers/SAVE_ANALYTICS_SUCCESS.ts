import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SAVE_ANALYTICS_SUCCESS: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { analyticsID } = data
  return { ...store, analyticsID }
}
