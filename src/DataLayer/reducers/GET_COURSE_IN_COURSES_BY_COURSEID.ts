import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const GET_COURSE_IN_COURSES_BY_COURSEID: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courses } = store

  const { courseID, course } = data

  const courseIndex = courses.findIndex(course => course.courseID === courseID)
  let coursesNext = [...courses]
  coursesNext[courseIndex] = course

  return { ...store, courses: coursesNext }
}
