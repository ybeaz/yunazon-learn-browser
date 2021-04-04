/**
 * @description Function to get answer by optionID
 * @param courses
 * @param optionIDIn
 * @returns any[]
 */

export const getOptionsClickedByID: Function = (
  courses: any[],
  optionIDIn: string,
  multi: boolean
): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.map(question => {
        const { options } = question

        const optionNext = options.map(option => {
          const { optionID, answer } = option
          let answerNext = multi ? answer : false
          if (optionID === optionIDIn) answerNext = !answer

          return { ...option, answer: answerNext }
        })

        return { ...question, options: optionNext }
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
