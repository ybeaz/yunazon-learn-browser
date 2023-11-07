/**
 * @description Function to add isSelected status default to courses and modules
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProvidedSelectedDefault: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      return { ...module, isSelected: false }
    })

    return { ...course, modules: modulesNext, isSelected: false }
  })
}
