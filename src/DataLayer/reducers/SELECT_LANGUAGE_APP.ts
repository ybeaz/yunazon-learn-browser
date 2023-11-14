import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SELECT_LANGUAGE_APP: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  return { ...store, language: data }
}
