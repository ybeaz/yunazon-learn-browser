/**
 * @description Function to toggle answer value on each click by option
 * @param courses
 * @param optionIDIn
 * @returns any[]
 */

export const getAnswerByOptionID: Function = (
  options: any[],
  optionIDIn: string
): boolean => {
  let answerNext: boolean

  options.forEach((option: any) => {
    let { optionID, answer } = option
    if (optionID === optionIDIn) answerNext = answer
  })

  return answerNext
}
