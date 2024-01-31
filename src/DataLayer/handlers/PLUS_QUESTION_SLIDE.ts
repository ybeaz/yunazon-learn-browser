import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const PLUS_QUESTION_SLIDE: ActionEventType = (event, data: any) => {
  const { step } = data
  const {
    scorm: { moduleIDActive },
    courses,
    componentsState: { questionsSlideNumber },
  } = getState()

  const { courseCapture } = getResultDataFromStore(courses, moduleIDActive)

  dispatch(actionSync.PLUS_QUESTION_SLIDE(data))
}
