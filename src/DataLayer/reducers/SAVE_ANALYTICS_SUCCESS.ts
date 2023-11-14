import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SAVE_ANALYTICS_SUCCESS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { analyticsID } = data
  return { ...store, analyticsID }
}
