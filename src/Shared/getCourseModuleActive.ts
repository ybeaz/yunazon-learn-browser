/**
 * @description Function to make isActiveTemp === true Course and Module by IDs
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
      let isActiveTemp = false
      if (module.moduleID === moduleID) isActiveTemp = true
      return { ...module, isActiveTemp }
    })

    let isActiveTemp = false
    if (course.courseID === courseID) isActiveTemp = true

    return { ...course, modules: modulesNext, isActiveTemp }
  })
}
