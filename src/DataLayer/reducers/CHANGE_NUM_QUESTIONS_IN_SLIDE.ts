import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const CHANGE_NUM_QUESTIONS_IN_SLIDE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { scorm } = store
  const scormNext = { ...scorm, numberQuestionsInSlide: data }
  const storeNext = { ...store, scorm: scormNext }
  return storeNext
}
