import { IRootStore } from '../../Interfaces/IRootStore'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getCourseModuleActive } from '../../Shared/getCourseModuleActive'

export const SELECT_COURSE_MODULE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courseID, moduleID } = data
  const { courses } = store

  let storeNext: IRootStore = { ...store }
  courses.forEach(course => {
    const { modules } = course
    modules.forEach(module => {
      const { contentID: mediaKey } = module
      const dataToMediaLoaded = { mediaKey, isMediaLoaded: false }
      storeNext = TOGGLE_MEDIA_LOADED(storeNext, dataToMediaLoaded)
    })
  })

  let coursesNext = getProvidedSelectedDefault(courses)
  coursesNext = getCourseModuleActive(courses, courseID, moduleID)
  storeNext = { ...storeNext, courses: coursesNext }

  return storeNext
}
