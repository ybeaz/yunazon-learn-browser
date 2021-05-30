/**
 * @description Function to add isActiveTemp status default to courses and modules
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProvidedActiveDefault: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      return { ...module, isActiveTemp: false }
    })

    return { ...course, modules: modulesNext, isActiveTemp: false }
  })
}
