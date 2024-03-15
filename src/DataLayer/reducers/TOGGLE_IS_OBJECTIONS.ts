import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

/**
 * @description Toggling isObjections
 */
export const TOGGLE_IS_OBJECTIONS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isObjections: data,
  }
  return {
    ...store,
    componentsState: componentsStateNext,
  }
}
