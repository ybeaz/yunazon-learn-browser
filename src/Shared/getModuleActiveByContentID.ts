/**
 * @description Function to make a course isActiveTemp based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByContentID: Function = (
  courses: any[],
  contentID: string
): any[] => {
  return courses.map(course => {
    let isActiveTemp = false
    const { modules } = course
    const modulesNext = modules.map(module => {
      const { contentID: contentIdModule } = module
      if (contentIdModule === contentID) {
        isActiveTemp = true
        return { ...module, isActiveTemp }
      }
      return module
    })
    return { ...course, modules: modulesNext, isActiveTemp }
  })
}
