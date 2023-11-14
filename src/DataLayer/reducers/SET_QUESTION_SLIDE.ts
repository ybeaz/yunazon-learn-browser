import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_QUESTION_SLIDE: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    questionsSlideNumber: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
