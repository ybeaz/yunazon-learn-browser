export const getAnswersChecked2 = questions => {
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
