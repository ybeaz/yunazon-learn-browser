interface GetModuleActiveByCourseIDIndexInputInterface {
  (args: { courses: any; courseID: string; index: number }): any[]
}

/**
 * @description Function to make a course isSelected based on contentID
 * @param courses
 * @param contentID
 * @returns
 */
export const getModuleActiveByCourseIDIndex: GetModuleActiveByCourseIDIndexInputInterface =
  ({ courses, courseID: courseIDIn, index: indexIn }) => {
    return courses.map(course => {
      let isSelected = false
      const { courseID, modules } = course
      const modulesNext = modules.map(module => {
        const { index } = module
        if (courseID === courseIDIn && index === indexIn) {
          isSelected = true
          return { ...module, isSelected }
        }
        return module
      })
      return { ...course, modules: modulesNext, isSelected }
    })
  }
