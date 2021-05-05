interface IGetModuleActiveByCourseIDIndexInput {
  courses: any
  courseID: string
  index: number
}

/**
 * @description Function to make a course active based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByCourseIDIndex: Function = ({
  courses,
  courseID: courseIDIn,
  index: indexIn,
}: IGetModuleActiveByCourseIDIndexInput): any[] => {
  return courses.map(course => {
    let active = false
    const { courseID, modules } = course
    const modulesNext = modules.map(module => {
      const { index } = module
      if (courseID === courseIDIn && index === indexIn) {
        active = true
        return { ...module, active }
      }
      return module
    })
    return { ...course, modules: modulesNext, active }
  })
}
