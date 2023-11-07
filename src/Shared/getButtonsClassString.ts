import { getAnswersChecked2 } from './getAnswersChecked2'

interface GetButtonsClassString {
  buttonsClassString: string
  isButtonSlideStart: boolean
  isButtonSlideBackward: boolean
  isButtonSlideForward: boolean
  isButtonToCertificate: boolean
  isButtonBlockProps: boolean
}

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
  questionsChunked: any[],
  isCourseStarted: boolean
): GetButtonsClassString => {
  const {
    total: questionsTotal,
    answered: questionsAnswered,
  } = getAnswersChecked2(questionsActive)

  const {
    total: chunkLen,
    answered: questionsChunkAnswered,
  } = getAnswersChecked2(questionsChunked[questionsSlideNumber])

  let isButtonSlideStart = false
  let isButtonSlideBackward = false
  let isButtonSlideForward = false
  let isButtonToCertificate = false
  let isButtonBlockProps = false

  let buttonLeft = ''
  if (questionsSlideNumber === 0) {
    isButtonSlideBackward = false
    buttonLeft = ''
  } else {
    isButtonSlideBackward = true
    buttonLeft = 'display_left'
  }

  let buttonRight = ''
  if (questionsSlideNumber < questionsChunkedLen) {
    if (questionsSlideNumber === questionsChunkedLen - 1) {
      if (questionsTotal === questionsAnswered) {
        isButtonToCertificate = true
        buttonRight = 'display_toCertificate'
      } else {
        isButtonBlockProps = true
        buttonRight = 'display_downLeft'
      }
    } else {
      if (chunkLen === questionsChunkAnswered) {
        isButtonSlideForward = true
        buttonRight = 'display_right'
      } else {
        isButtonBlockProps = true
        buttonRight = 'display_downLeft'
      }
    }
  }

  let buttonsClassString = ''
  if (!questionsActive.length) {
    isButtonSlideStart = false
    isButtonSlideBackward = false
    isButtonSlideForward = false
    isButtonToCertificate = false
    isButtonBlockProps = false
    buttonsClassString = ''
  } else if (questionsAnswered === 0) {
    isButtonSlideBackward = false
    isButtonSlideForward = false
    isButtonToCertificate = false
    isButtonBlockProps = isCourseStarted === false ? false : true
    isButtonSlideStart = isCourseStarted === false ? true : false
    buttonRight =
      isCourseStarted === false ? 'display_startModule' : 'display_downLeft'
    buttonsClassString = `${buttonLeft} ${buttonRight}`
  } else {
    buttonsClassString = `${buttonLeft} ${buttonRight}`
  }

  return {
    buttonsClassString,
    isButtonSlideStart,
    isButtonSlideBackward,
    isButtonSlideForward,
    isButtonToCertificate,
    isButtonBlockProps,
  }
}
