import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const PLUS_QUESTION_SLIDE: ActionEventType = (event, data) => {
  const { step } = data
  const {
    courses,
    componentsState: { questionsSlideNumber },
  } = getState()

  const { courseCapture } = getResultDataFromStore(courses)
  const options = { courseCapture, questionsSlideNumber }
  event?.preventDefault &&
    step === 1 &&
    getSavedAnanlyticsEvent(
      event,
      getAzProps('QUESTIONS_STEPPED_FORWARD')(options)
    )

  dispatch(actionSync.PLUS_QUESTION_SLIDE(data))
}
