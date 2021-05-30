import { nanoid } from 'nanoid'

/**
 * @description Function to provide content arr with IDs for courses, questions, options
 * @param content: any[]
 * @returns content: any[]
 */
export const getProvidedID: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.map(question => {
        const { options } = question

        const optionNext = options.map(option => {
          const nanoID = nanoid()
          return { optionID: nanoID, ...option }
        })

        const nanoID = nanoid()
        return { questionID: nanoID, ...question, options: optionNext }
      })

      const nanoID = nanoid()
      return { ...module, questions: questionsNext }
    })

    const nanoID = nanoid()
    return { ...course, modules: modulesNext }
  })
}
