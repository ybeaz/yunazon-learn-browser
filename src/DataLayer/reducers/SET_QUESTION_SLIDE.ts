import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_QUESTION_SLIDE: Function = (
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
