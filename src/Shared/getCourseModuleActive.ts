/**
 * @description Function to make active === true Course and Module by IDs
 * @returns
 */
export const getCourseModuleActive: Function = (
  courses: any[],
  courseID: string,
  moduleID: string
): any[] => {
  return courses.map(course => {
    const { modules } = course
    const modulesNext = modules.map(module => {
      let active = false
      if (module.moduleID === moduleID) active = true
      return { ...module, active }
    })

    let active = false
    if (course.courseID === courseID) active = true

    return { ...course, modules: modulesNext, active }
  })
}
