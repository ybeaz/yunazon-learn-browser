import { CourseType, ModuleType } from '../@types/GraphqlTypes'

interface GetModuleActiveByModuleIDType {
  (args: { courses: CourseType[]; moduleID: string }): any[]
}

/**
 * @description Function to make a course isSelected based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByModuleID: GetModuleActiveByModuleIDType = ({
  courses,
  moduleID: moduleIDIn,
}) => {
  return courses.map((course: CourseType) => {
    let isSelected = false
    const { modules } = course
    let modulesNext: ModuleType[] = modules || []
    modulesNext = modulesNext.map(module => {
      const { moduleID } = module
      if (moduleID === moduleIDIn) {
        isSelected = true
        return { ...module, isSelected }
      }
      return module
    })
    return { ...course, modules: modulesNext, isSelected }
  })
}
