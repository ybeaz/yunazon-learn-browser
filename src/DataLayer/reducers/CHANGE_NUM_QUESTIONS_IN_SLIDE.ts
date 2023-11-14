import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const CHANGE_NUM_QUESTIONS_IN_SLIDE: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, numberQuestionsInSlide: data }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
