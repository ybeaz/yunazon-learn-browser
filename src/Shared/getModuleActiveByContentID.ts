/**
 * @description Function to make a course active based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByContentID: Function = (
  courses: any[],
  contentID: string
): any[] => {
  return courses.map(course => {
    let active = false
    const { modules } = course
    const modulesNext = modules.map(module => {
      const { contentID: contentIdModule } = module
      if (contentIdModule === contentID) {
        active = true
        return { ...module, active }
      }
      return module
    })
    return { ...course, modules: modulesNext, active }
  })
}
