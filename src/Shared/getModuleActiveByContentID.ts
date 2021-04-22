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
      const { ytID } = module
      if (ytID === contentID) {
        active = true
        return { ...module, active }
      }
      return module
    })
    return { ...course, modules: modulesNext, active }
  })
}
