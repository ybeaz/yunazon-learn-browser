import { CourseType, ModuleType } from '../@types/GraphqlTypes'

interface GetModuleActiveByCourseIDIndexType {
  (args: { courses: CourseType[]; courseID: string; index: number }): any[]
}

/**
 * @description Function to make a course isSelected based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByCourseIDIndex: GetModuleActiveByCourseIDIndexType =
  ({ courses, courseID: courseIDIn, index: indexIn }) => {
    return courses.map((course: CourseType) => {
      let isSelected = false
      const { courseID, modules } = course
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
