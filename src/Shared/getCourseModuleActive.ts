/**
 * @description Function to make isSelected === true Course and Module by IDs
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
      let isSelected = false
      if (module.moduleID === moduleID) isSelected = true
      return { ...module, isSelected }
    })

    let isSelected = false
    if (course.courseID === courseID) isSelected = true

    return { ...course, modules: modulesNext, isSelected }
  })
}
