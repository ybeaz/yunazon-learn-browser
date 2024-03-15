import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

/**
 * @description Toggling isMobileSearchInput
 */
export const TOGGLE_IS_MOBILE_SEARCH_INPUT: ReducerType = (
  store: RootStoreType,
  { isMobileSearchInput }: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isMobileSearchInput,
  }
  return {
    ...store,
    componentsState: componentsStateNext,
  }
}
