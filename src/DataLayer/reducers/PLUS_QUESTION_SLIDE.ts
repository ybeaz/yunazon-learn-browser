import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { getModuleByModuleID } from '../../Shared/getModuleByModuleID'

export const PLUS_QUESTION_SLIDE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const {
    componentsState,
    modules,
    scorm: { numberQuestionsInSlide, moduleIDActive },
  } = store
  const { questionsSlideNumber } = componentsState
  const { step } = data

  const { questions } = getModuleByModuleID({
    modules,
    moduleID: moduleIDActive || '',
  })
  const questionsChunked = getChunkedArray(questions, numberQuestionsInSlide)

  let questionSlideNumberNext = 0
  const questionSlideNumberPlus = questionsSlideNumber + step
  if (questionSlideNumberPlus > questionsChunked.length - 1) {
    questionSlideNumberNext = questionsChunked.length - 1
  } else if (questionSlideNumberPlus < 0) {
    questionSlideNumberNext = 0
  } else {
    questionSlideNumberNext = questionSlideNumberPlus
  }
  const componentsStateNext = {
    ...componentsState,
    questionsSlideNumber: questionSlideNumberNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
