/**
 * @description Function to return module by provided contentID
 * @param courses
 * @param nameID
 * @param contentID
 * @returns
 */
export const getModuleByID: Function = (
  courses: any[],
  nameID: string = 'contentID',
  ID: string
): any => {
  let module = {}

  courses.forEach(course => {
    const { courseID, capture: courseCapture, modules } = course
    const modulesTotal = modules.length
    const moduleFound = modules.find(module => module[nameID] === ID)

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
