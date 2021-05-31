/**
 * @description Function to filter NOT isActive courses, modules and questions
 * @param courses: any[]
 * @returns content: any[]
 */
export const getFilteredActiveCoursesModules: Function = (
  courses: any[]
): any[] => {
  return courses.filter(course => {
    const { isActive: isActiveCourse, modules } = course
    let res = true

    modules.forEach(module => {
      const { isActive: isActiveModule, questions } = module

      if (res === true) {
        res = isActiveModule === false ? false : true
      }
    })

    res = isActiveCourse === true && res === true ? true : false

    return res
  })
}
