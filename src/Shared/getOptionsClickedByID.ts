/**
 * @description Function to get answer by optionID
 * @param courses
 * @param optionIDIn
 * @returns any[]
 */

export const getOptionsClickedByID: Function = (
  courses: any[],
  optionIDIn: string
): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.map(question => {
        const { options } = question

        const optionNext = options.map(option => {
          let { optionID, answer } = option
          if (optionID === optionIDIn) answer = !answer

          return { ...option, answer }
        })

        return { ...question, options: optionNext }
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
