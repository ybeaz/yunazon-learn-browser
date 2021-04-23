/**
 * @description Funciton to return question string depending on declention of the word
 * @param length
 * @returns
 */
export const getRuQuesionString: Function = length => {
  let questionStr = 'вопросов'

  if (length === 1 || length === 21 || length === 31) questionStr = 'вопрос'
  else if (
    (2 <= length && length <= 4) ||
    (22 <= length && length <= 24) ||
    (32 <= length && length <= 34)
  )
    questionStr = 'вопроса'

  return questionStr
}
