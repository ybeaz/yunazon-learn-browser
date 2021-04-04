/**
 * @description Function to add active status default to courses and modules
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProvidedActiveDefault: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      return { ...module, active: false }
    })

    return { ...course, modules: modulesNext, active: false }
  })
}
