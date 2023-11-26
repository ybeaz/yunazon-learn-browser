import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'
import { SET_MODULE_ID_ACTIVE } from './SET_MODULE_ID_ACTIVE'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getCourseModuleActive } from '../../Shared/getCourseModuleActive'

export const SELECT_COURSE_MODULE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courseID, moduleID } = data
  const { courses } = store

  let storeNext: RootStoreType = { ...store }
  storeNext = SET_MODULE_ID_ACTIVE(storeNext, { moduleID })

  courses.forEach(course => {
    const modules = course?.modules || []
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
