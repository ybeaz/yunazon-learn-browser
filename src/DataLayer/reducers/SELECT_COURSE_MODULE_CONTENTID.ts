import { IRootStore } from '../../Interfaces/IRootStore'
import { getProvidedActiveDefault } from '../../Shared/getProvidedActiveDefault'
import { getModuleActiveByCourseIDIndex } from '../../Shared/getModuleActiveByCourseIDIndex'

export const SELECT_COURSE_MODULE_CONTENTID: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courseID, index } = data
  const { courses } = store
  let coursesNext = getProvidedActiveDefault(courses)
  coursesNext = getModuleActiveByCourseIDIndex({ courses, courseID, index })
  return { ...store, courses: coursesNext }
}
