import { CourseType, ModuleType } from '../@types/GraphqlTypes'

interface GetModuleActiveByCourseIDIndexType {
  (args: { courses: CourseType[]; courseID: string; index: number }): any[]
}

/**
 * @status DEPRECIATED
 * @description Function to make a course isSelected based on contentID and index
 * @import import { getModuleActiveByCourseIDIndex } from '../Shared/getModuleActiveByCourseIDIndex'
 */
export const getModuleActiveByCourseIDIndex: GetModuleActiveByCourseIDIndexType =
  ({ courses, courseID: courseIDIn, index: indexIn }) => {
    return courses.map((course: CourseType) => {
      let isSelected = false
      const { courseID, modules } = course
      // @ts-expect-error
      let modulesNext: ModuleType[] = modules || []
      modulesNext = modulesNext.map(module => {
        const { index } = module
        if (courseID === courseIDIn && index === indexIn) {
          isSelected = true
          return { ...module, isSelected }
        }
        return module
      })
      return { ...course, modules: modulesNext, isSelected }
    })
  }
