import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getCoursePassParamsSet } from '../../Shared/getCoursePassParamsSet'

export const GET_COURSE_QUERY_PR_QN: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courses } = store

  const { courseID, index, isReducing, questionNumberIn, passRateIn } = data

  let coursesNext = courses

  if (isReducing) {
    coursesNext = getCoursePassParamsSet(courses, {
      courseIDIn: courseID,
      indexIn: index,
      questionNumberIn,
      passRateIn,
    })
  }

  return { ...store, courses: coursesNext }
}
