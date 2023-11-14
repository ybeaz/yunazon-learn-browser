import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getModuleActiveByCourseIDIndex } from '../../Shared/getModuleActiveByCourseIDIndex'

export const SELECT_COURSE_MODULE_CONTENTID: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courseID, index } = data
  const { courses } = store

  let storeNext: RootStoreType = { ...store }
  courses.forEach(course => {
    const { modules } = course
    modules.forEach((module: any) => {
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
