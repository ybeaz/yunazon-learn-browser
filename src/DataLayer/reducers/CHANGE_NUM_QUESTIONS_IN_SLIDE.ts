import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const CHANGE_NUM_QUESTIONS_IN_SLIDE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, numberQuestionsInSlide: data }
  const storeNext = { ...store, globalVars: globalVarsNext }
  return storeNext
}
