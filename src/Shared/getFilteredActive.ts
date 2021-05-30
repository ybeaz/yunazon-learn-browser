/**
 * @description Function to add isActiveTemp status default to courses and modules
 * @param courses: any[]
 * @returns content: any[]
 */
export const getFilteredActive: Function = (courses: any[]): any[] => {
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
