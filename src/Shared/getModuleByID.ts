import { CourseType, ModuleType } from '../@types/GraphqlTypes'

/**
 * @status DEPRECIATED
 * @description Function to return module by provided contentID
 * @import import { getModuleByID } from '../Shared/getModuleByID'
 */
export const getModuleByID: Function = (
  courses: CourseType[],
  nameID: string = 'contentID',
  ID: string
): any => {
  let module = {}

  courses.forEach(course => {
    const { courseID, capture: moduleCapture, modules } = course
    const modulesTotal = modules?.length

    // @ts-expect-error
    let moduleFound: ModuleType | undefined = modules
      ? modules.find(
          // @ts-expect-error
          (module: ModuleType) => module[nameID] === ID
        )
      : undefined

    if (moduleFound) {
      const { questions } = moduleFound
      const questionsTotal = questions.length
      module = {
        ...moduleFound,
        courseID,
        moduleCapture,
        modulesTotal,
        questionsTotal,
      }
    }
  })
  return module
}
