interface IGetModuleByCourseIDIndexInput {
  courses: any
  courseID: string
  index: number
}

/**
 * @description Function to return module by provided contentID
 * @param courses
 * @param nameContentID
 * @param contentID
 * @returns
 */
export const getModuleByCourseIDIndex: Function = ({
  courses,
  courseID: courseIDIn,
  index,
}: IGetModuleByCourseIDIndexInput): any => {
  let output = {}

  const course = courses.find(course => course.courseID === courseIDIn)
  const { courseID, capture: courseCapture, modules } = course
  const modulesTotal = modules.length
  const module = modules.find(module => module.index === index)

  if (module) {
    const { questions } = module
    const questionsTotal = questions.length
    output = {
      ...module,
      courseID,
      courseCapture,
      modulesTotal,
      questionsTotal,
    }
  }

  return output
}
