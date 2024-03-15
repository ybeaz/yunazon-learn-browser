import { QuestionType, OptionType } from '../@types/GraphqlTypes'

type Option2Type = OptionType & { answer: boolean }

export enum ResultType {
  success = 'success',
  failure = 'failure',
}

export type GetAnswersChecked2OutType = {
  total: number
  answered: number
  right: number
  wrong: number
  result: ResultType
}

interface GetAnswersChecked2Type {
  (questions: any[], passRateIn?: number): GetAnswersChecked2OutType
}

/**
 * @description Function to count quiz score of the module level
 * @param questions
 * @param passRateIn
 * @returns
 */
export const getAnswersChecked2: GetAnswersChecked2Type = (
  questions: any[] = [],
  passRateIn: number = 1
) => {
  let res = {
    total: questions.length,
    right: 0,
    wrong: 0,
    answered: 0,
    result: ResultType['failure'],
  }
  questions.forEach(question => {
    let counter = 0
    question.options.forEach((option: Option2Type) => {
      if (option.status === option.answer) {
        counter = counter + 1
      }
    })

    if (counter === question.options.length) {
      res.right = res.right + 1
    } else {
      res.wrong = res.wrong + 1
    }

    const findAnswer = question.options.find(
      (option: Option2Type) => option.answer === true
    )
    if (findAnswer) res.answered += 1
  })
  res.result =
    res.total <= res.right / passRateIn
      ? ResultType['success']
      : ResultType['failure']

  return res
}
