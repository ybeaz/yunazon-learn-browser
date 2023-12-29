import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

/**
 * @description Toggling success confetti
 */
export const TOGGLE_IS_SUMMARY: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isSummary: data,
  }
  return {
    ...store,
    componentsState: componentsStateNext,
  }
}
