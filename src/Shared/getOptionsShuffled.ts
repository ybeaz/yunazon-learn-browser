import { ModuleType, QuestionType } from '../@types/GraphqlTypes'
import { getArrShuffled } from './getArrShuffled'

/**
 * @description Function to add a default answer to each question option
 */
export const getOptionsShuffled = (modules: ModuleType[]): ModuleType[] => {
  return modules.map((module: ModuleType) => {
    const { questions } = module

    const questionsNext = questions.map((question: QuestionType) => {
      const { options } = question

      const optionsNext = getArrShuffled(options)

      return { ...question, options: optionsNext }
    })

    return { ...module, questions: questionsNext }
  })
}
