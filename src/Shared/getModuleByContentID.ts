/**
 * @description Function to return module by provided contentID
 * @param courses
 * @param nameContentID
 * @param contentID
 * @returns
 */
export const getModuleByContentID: Function = (
  courses: any[],
  nameContentID: string = 'contentID',
  contentID: string
): any => {
  let module = {}

  courses.forEach(course => {
    const { courseID, capture: courseCapture, modules } = course
    const modulesTotal = modules.length
    const moduleFound = modules.find(
      module => module[nameContentID] === contentID
    )

    if (moduleFound) {
      const { questions } = moduleFound
      const questionsTotal = questions.length
      module = {
        ...moduleFound,
        courseID,
        courseCapture,
        modulesTotal,
        questionsTotal,
      }
    }
  })
  return module
}
