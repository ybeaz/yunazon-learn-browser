import { IRootStore } from '../../Interfaces/IRootStore'
import { getCoursePassParamsSet } from '../../Shared/getCoursePassParamsSet'
import { getLimitedArrayElemsRandomly } from '../../Shared/getLimitedArrayElemsRandomly'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'

export const GET_COURSE_QUERY_PR_QN: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courses } = store

  const { courseID, index, isReducing, questionNumberIn, passRateIn } = data

  let coursesNext = courses

  if (isReducing) {
    coursesNext = getCoursePassParamsSet(courses, {
      courseID,
      index,
      questionNumberIn,
      passRateIn,
    })
  }

  return { ...store, courses: coursesNext }
}
