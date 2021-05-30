/**
 * @description Function to add isActiveTemp status default to courses and modules
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProvidedActiveDefault: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.map(question => {
        const { options } = question

        const optionNext = options.map(option => {
          return { ...option }
        })

        return { ...question, options: optionNext, isActiveTemp: true }
      })

      return { ...module, questionsNext, isActiveTemp: true }
    })

    return { ...course, modules: modulesNext, isActiveTemp: true }
  })
}
