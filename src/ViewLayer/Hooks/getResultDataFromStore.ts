import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'

interface IGetResultDataFromStore {
  result: string
  courseCapture: string
}

/**
 * @descriptiion Function to incapsulate a range of repeating steps to return user results from course
 */
export const getResultDataFromStore: Function = (
  courses: any[],
  moduleIDActive: string
): IGetResultDataFromStore => {
  const {
    courseActive: { capture: courseCapture },
    questionsActive,
  } = getActiveCourseData(courses, moduleIDActive)
  const { result } = getAnswersChecked2(questionsActive)
  return { result, courseCapture }
}
