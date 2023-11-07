import { IRootStore } from '../../Interfaces/IRootStore'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getModuleActiveByCourseIDIndex } from '../../Shared/getModuleActiveByCourseIDIndex'

export const SELECT_COURSE_MODULE_CONTENTID: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courseID, index } = data
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
  coursesNext = getModuleActiveByCourseIDIndex({ courses, courseID, index })
  storeNext = { ...storeNext, courses: coursesNext }
  return storeNext
}
