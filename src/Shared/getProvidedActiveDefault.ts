/**
 * @description Function to add isActiveTemp status default to courses and modules
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProvidedActiveDefault: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { isActive: isActiveCourse, modules } = course

    const modulesNext = modules.map(module => {
      const { isActive: isActiveModule, questions } = module

      const questionsNext = questions.map(question => {
        const { isActive: isActiveQuestion, options } = question

        const optionNext = options.map(option => {
          return { ...option }
        })

        const isActiveTemp =
          isActiveCourse === true &&
          isActiveModule === true &&
          isActiveQuestion === true
            ? true
            : false
        return { ...question, options: optionNext, isActiveTemp }
      })

      return { ...module, questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
