import { ModuleType, QuestionType, OptionType } from '../@types/GraphqlTypes'

/**
 * @description Function to add a default answer to each question option
 */
export const getProvidedAnswerDefault = (modules: ModuleType[]): ModuleType[] => {
  return modules.map((module: ModuleType) => {
    const { questions } = module

    if (!questions) return module

    const questionsNext = questions.map((question: QuestionType) => {
      const { options } = question

      const optionNext = options.map((option: OptionType) => {
        return { ...option, answer: false }
      })

      return { ...question, options: optionNext }
    })

    return { ...module, questions: questionsNext }
  })
}
