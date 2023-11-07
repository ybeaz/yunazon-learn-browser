/**
 * @description Funciton to return question string depending on declention of the word
 * @param length
 * @returns
 */
export const getQuesionString: Function = (language, length) => {
  let questionStr = ''

  if (language === 'ru') {
    questionStr = 'вопросов'
    if (length === 1 || length === 21 || length === 31) questionStr = 'вопрос'
    else if (
      (2 <= length && length <= 4) ||
      (22 <= length && length <= 24) ||
      (32 <= length && length <= 34)
    )
      questionStr = 'вопроса'
  } else if (language === 'en') {
    if (length === 1 || length === 21 || length === 31) questionStr = 'question'
    else if (
      (2 <= length && length <= 20) ||
      (22 <= length && length <= 30) ||
      (32 <= length && length <= 40)
    )
      questionStr = 'questions'
  }

  return questionStr
}
