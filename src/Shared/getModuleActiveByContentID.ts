/**
 * @description Function to make a course isSelected based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByContentID: Function = (
  courses: any[],
  contentID: string
): any[] => {
  return courses.map(course => {
    let isSelected = false
    const { modules } = course
    const modulesNext = modules.map(module => {
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
