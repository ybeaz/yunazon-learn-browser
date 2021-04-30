import { IRootStore } from '../../Interfaces/IRootStore'

export const CHANGE_NUM_QUESTIONS_IN_SLIDE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, numberQuestionsInSlide: data }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
