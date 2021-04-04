interface IRESgetAnswersChecked2 {
  total: number
  right: number
  wrong: number
}

/**
 * @description Function to count quiz score of the module level
 * @param questions
 * @returns
 */
export const getAnswersChecked2: Function = (
  questions: any[]
): IRESgetAnswersChecked2 => {
  let res = { total: questions.length, right: 0, wrong: 0 }
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
  })
  return res
}
