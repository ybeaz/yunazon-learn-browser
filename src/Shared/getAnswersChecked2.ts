interface GetAnswersChecked2 {
  total: number
  right: number
  wrong: number
}

/**
 * @description Function to count quiz score of the module level
 * @param questions
 * @param passRateIn
 * @returns
 */
export const getAnswersChecked2: Function = (
  questions: any[],
  passRateIn: number = 1
): GetAnswersChecked2 => {
  let res = {
    total: questions.length,
    right: 0,
    wrong: 0,
    answered: 0,
    result: 'failure',
  }
  questions.forEach(question => {
    let counter = 0
    question.options.forEach(option => {
      if (option.status === option.answer) {
        counter = counter + 1
      }
    })

    if (counter === question.options.length) {
      res.right = res.right + 1
    } else {
      res.wrong = res.wrong + 1
    }

    const findAnswer = question.options.find(option => option.answer === true)
    if (findAnswer) res.answered += 1
  })
  res.result = res.total <= res.right / passRateIn ? 'success' : 'failure'

  return res
}
