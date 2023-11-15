import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getModuleActiveByCourseIDIndex } from '../../Shared/getModuleActiveByCourseIDIndex'
import { getModuleActiveByModuleID } from '../../Shared/getModuleActiveByModuleID'

export const SELECT_COURSE_MODULE_CONTENTID: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { moduleID, courseID, index } = data
  const { courses } = store

  let storeNext: RootStoreType = { ...store }

  let coursesNext = getProvidedSelectedDefault(courses)
  // coursesNext = getModuleActiveByCourseIDIndex({ courses, courseID, index })
  coursesNext = getModuleActiveByModuleID({ courses, moduleID })
  storeNext = { ...storeNext, courses: coursesNext }
  console.info('SELECT_COURSE_MODULE_CONTENTID [25]', {
    coursesNext,
    storeNext,
  })
  return storeNext
}
