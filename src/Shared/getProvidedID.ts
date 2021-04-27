import { v4 as uuidv4 } from 'uuid'

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
          const uuid = uuidv4()
          return { optionID: uuid, ...option }
        })

        const uuid = uuidv4()
        return { questionID: uuid, ...question, options: optionNext }
      })

      const uuid = uuidv4()
      return { moduleID: uuid, ...module, questions: questionsNext }
    })

    const uuid = uuidv4()
    return { courseID: uuid, ...course, modules: modulesNext }
  })
}
