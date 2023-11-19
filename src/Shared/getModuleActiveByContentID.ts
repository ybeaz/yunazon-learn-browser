import { CourseType, ModuleType } from '../@types/GraphqlTypes'

/**
 * @description Function to make a course isSelected based on contentID
 * @import import { getModuleActiveByContentID } from '../Shared/getModuleActiveByContentID'
 */
export const getModuleActiveByContentID = (
  courses: CourseType[],
  contentID: string
): any[] => {
  return courses.map(course => {
    let isSelected = false
    const { modules } = course
    let modulesNext: ModuleType[] = modules || []

    modulesNext = modulesNext.map((module: ModuleType) => {
      const { contentID: contentIdModule } = module
      if (contentIdModule === contentID) {
        isSelected = true
        return { ...module, isSelected }
      }
      return module
    })
    return { ...course, modules: modulesNext, isSelected }
  })
}
