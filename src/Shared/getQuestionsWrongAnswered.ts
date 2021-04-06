/**
 * @description Function to get an array of wrong answered questions
 * @param questions
 * @returns
 */
export const getQuestionsWrongAnswered: Function = (
  questions: any[]
): any[] => {
  return questions.filter(question => {
    let res = false
    let counter = 0
    question.options.forEach(option => {
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
