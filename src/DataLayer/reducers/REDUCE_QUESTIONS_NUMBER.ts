import { IRootStore } from '../../Interfaces/IRootStore'
import { getReducedQuestionsByNum } from '../../Shared/getReducedQuestionsByNum'
import { getLimitedArrayElemsRandomly } from '../../Shared/getLimitedArrayElemsRandomly'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'

export const REDUCE_QUESTIONS_NUMBER: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courses } = store

  const { courseID, index, isReducing } = data

  let coursesNext = courses

  if (isReducing) {
    coursesNext = getReducedQuestionsByNum(courses, { courseID, index })
  }

  return { ...store, courses: coursesNext }
}
