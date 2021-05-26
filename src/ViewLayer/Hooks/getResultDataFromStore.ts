import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'

interface IGetResultDataFromStore {
  result: string
  courseCapture: string
}

/**
 * @descriptiion Function to incapsulate a range of repeating steps to return user results from course
 * @param getState
 * @returns
 */
export const getResultDataFromStore: Function = (
  courses: any[]
): IGetResultDataFromStore => {
  const {
    courseActive: { courseID, capture: courseCapture },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses)
  const { result } = getAnswersChecked2(questionsActive)
  return { result, courseCapture }
}
