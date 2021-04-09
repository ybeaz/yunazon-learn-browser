import { getAnswersChecked2 } from './getAnswersChecked2'

/**
 * @description Function to return two control button for navigating quesitons to answer
 * @param questionsSlideNumber
 * @param questionsChunkedLen
 * @param questionsActive
 * @param questionsChunked
 * @returns
 */
export const getButtonsClassString: Function = (
  questionsSlideNumber: number,
  questionsChunkedLen: number,
  questionsActive: any[],
  questionsChunked: any[]
): string => {
  const {
    total: questionsTotal,
    answered: questionsAnswered,
  } = getAnswersChecked2(questionsActive)

  const {
    total: chunkLen,
    answered: questionsChunkAnswered,
  } = getAnswersChecked2(questionsChunked[questionsSlideNumber])

  let buttonLeft = ''
  if (questionsSlideNumber === 0) buttonLeft = ''
  else buttonLeft = 'display_left'

  let buttonRight = ''
  if (questionsSlideNumber < questionsChunkedLen) {
    if (questionsSlideNumber === questionsChunkedLen - 1) {
      if (questionsTotal === questionsAnswered)
        buttonRight = 'display_toCertificate'
      else buttonRight = 'display_downLeft'
    } else {
      if (chunkLen === questionsChunkAnswered) buttonRight = 'display_right'
      else buttonRight = 'display_downLeft'
    }
  }

  return `${buttonLeft} ${buttonRight}`
}
