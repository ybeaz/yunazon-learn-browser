import { IRootStore } from '../../Interfaces/IRootStore'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'

export const PLUS_QUESTION_SLIDE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState, courses, globalVars } = store
  const numberQuestionsInSlide = globalVars?.numberQuestionsInSlide
  const { questionsSlideNumber } = componentsState

  const { questionsActive } = getActiveCourseData(courses)
  const questionsChunked = getChunkedArray(
    questionsActive,
    numberQuestionsInSlide
  )

  let questionSlideNumberNext = 0
  const questionSlideNumberPlus = questionsSlideNumber + data
  if (questionSlideNumberPlus > questionsChunked.length - 1) {
    questionSlideNumberNext = questionsChunked.length - 1
  } else if (questionSlideNumberPlus < 0) {
    questionSlideNumberNext
  } else {
    questionSlideNumberNext = questionSlideNumberPlus
  }
  const componentsStateNext = {
    ...componentsState,
    questionsSlideNumber: questionSlideNumberNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
