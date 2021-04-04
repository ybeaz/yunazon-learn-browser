import { getArrShuffled } from './getArrShuffled'

/**
 * @description Function to add a default answer to each question option
 * @param courses: any[]
 * @returns content: any[]
 */
export const getOptionsShuffled: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.map(question => {
        const { options } = question

        const optionsNext = getArrShuffled(options)

        return { ...question, options: optionsNext }
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
