/**
 * @description Function to return module by provided contentID
 * @param courses
 * @param nameContentID
 * @param contentID
 * @returns
 */
export const getModuleByContentID: Function = (
  courses: any[],
  nameContentID: string,
  contentID: string
): any => {
  let module = {}

  courses.forEach(course => {
    const { modules } = course
    const moduleFound = modules.find(
      module => module[nameContentID] === contentID
    )

    if (moduleFound) module = moduleFound
  })
  return module
}
