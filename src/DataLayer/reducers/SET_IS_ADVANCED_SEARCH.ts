import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_IS_ADVANCED_SEARCH: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isSepAdvancedSearch: data,
  }
  return {
    ...store,
    componentsState: componentsStateNext,
  }
}
