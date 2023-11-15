import { CourseType, ModuleType } from '../@types/GraphqlTypes'

interface GetModuleByModuleIDType {
  (args: { courses: CourseType[]; moduleID: string }): any
}

/**
 * @description Function to return module by provided moduleID
 * @import import { getModuleByModuleID } from '../Shared/getModuleByModuleID'
 */
export const getModuleByModuleID: GetModuleByModuleIDType = ({
  courses,
  moduleID: moduleIDIn,
}) => {
  let output = {}

  let course:
    | CourseType
    | Pick<
        CourseType,
        'courseID' | 'capture' | 'description' | 'language' | 'modules'
      > = {
    courseID: '',
    capture: '',
    description: '',
    language: '',
    modules: [],
  }

  let module:
    | ModuleType
    | Pick<ModuleType, 'capture' | 'description' | 'questions'> = {
    capture: '',
    description: '',
    questions: [],
  }

  for (let course2 of courses) {
    const { modules } = course2
    let getBroken = false
    for (let module2 of modules || []) {
      const { moduleID } = module2
      if (moduleID && moduleID === moduleIDIn) {
        course = course2
        module = module2
        getBroken = true
        if (getBroken) break
      }
      if (getBroken) break
    }
  }

  const {
    courseID,
    capture: courseCapture,
    description: courseDescription,
    language,
    modules,
  } = course
  const modulesTotal = modules && modules.length

  let moduleCapture = module?.capture
  let moduleDescription = module?.description

  if (modulesTotal === 1) {
    moduleCapture = courseCapture
    moduleDescription = courseDescription
  }

  if (module?.questions) {
    const { questions } = module
    const questionsTotal = questions.length
    output = {
      ...module,
      courseID,
      courseCapture,
      language,
      moduleCapture,
      moduleDescription,
      modulesTotal,
      questionsTotal,
    }
  }

  return output
}
