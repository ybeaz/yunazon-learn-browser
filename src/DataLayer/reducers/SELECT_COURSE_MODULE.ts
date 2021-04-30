import { IRootStore } from '../../Interfaces/IRootStore'
import { getProvidedActiveDefault } from '../../Shared/getProvidedActiveDefault'
import { getCourseModuleActive } from '../../Shared/getCourseModuleActive'

export const SELECT_COURSE_MODULE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courseID, moduleID } = data
  const { courses } = store
  let coursesNext = getProvidedActiveDefault(courses)
  coursesNext = getCourseModuleActive(courses, courseID, moduleID)
  return { ...store, courses: coursesNext }
}
