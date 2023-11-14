import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'

export const PLUS_QUESTION_SLIDE: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState, courses, globalVars } = store
  const numberQuestionsInSlide = globalVars?.numberQuestionsInSlide
  const { questionsSlideNumber } = componentsState
  const { step } = data

  const { questionsActive } = getActiveCourseData(courses)
  const questionsChunked = getChunkedArray(
    questionsActive,
    numberQuestionsInSlide
  )

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
