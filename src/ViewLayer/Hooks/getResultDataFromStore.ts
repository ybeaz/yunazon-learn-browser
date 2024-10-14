import { getAnswersChecked2 } from 'yourails_common'
import { getActiveCourseData } from 'yourails_common'

interface IGetResultDataFromStore {
  result: string
  moduleCapture: string | undefined
}

/**
 * @descriptiion Function to incapsulate a range of repeating steps to return user results from course
 */
export const getResultDataFromStore: Function = (
  courses: any[],
  moduleIDActive: string
): IGetResultDataFromStore => {
  const {
    courseActive: { capture: moduleCapture },
    questionsActive,
  } = getActiveCourseData(courses, moduleIDActive)
  const { result } = getAnswersChecked2(questionsActive)
  return { result, moduleCapture }
}
