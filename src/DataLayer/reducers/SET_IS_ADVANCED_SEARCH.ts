import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_IS_ADVANCED_SEARCH: Function = (
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
