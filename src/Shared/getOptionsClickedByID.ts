import { CourseType, ModuleType, QuestionType, OptionType } from '../@types/'

/**
 * @description Function to get answer by optionID
 */

export const getOptionsClickedByID = (
  modules: ModuleType[],
  optionIDIn: string,
  multi: boolean
): ModuleType[] => {
  return modules.map((module: ModuleType) => {
    const { questions } = module

    const questionsNext = questions.map((question: QuestionType) => {
      const { options } = question
      const isQuestionWithOptionIDIn = options.find(
        option => option.optionID === optionIDIn
      )

      const optionNext = options.map(
        (option: OptionType & { answer?: boolean }) => {
          const { optionID, answer } = option
          let answerNext = multi || !isQuestionWithOptionIDIn ? answer : false
          if (optionID === optionIDIn) answerNext = !answer
          return { ...option, answer: answerNext }
        }
      )

      return { ...question, options: optionNext }
    })

    return { ...module, questions: questionsNext }
  })
}
