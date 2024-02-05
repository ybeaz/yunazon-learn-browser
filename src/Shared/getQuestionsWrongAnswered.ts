import { QuestionType, OptionType } from '../@types/GraphqlTypes'

/**
 * @description Function to get an array of wrong answered questions
 */
export const getQuestionsWrongAnswered = (questions: QuestionType[]): any[] => {
  return questions.filter((question: QuestionType) => {
    let res = false
    let counter = 0
    question.options.forEach((option: any) => {
      if (option.status === option.answer) {
        counter = counter + 1
      }
    })
    if (counter !== question.options.length) {
      res = true
    }
    return res
  })
}
