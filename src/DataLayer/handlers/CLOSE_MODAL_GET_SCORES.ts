import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const CLOSE_MODAL_GET_SCORES = (event: any, data: any): void => {
  const { courses } = getState()
  const options = getResultDataFromStore(courses)
  event?.preventDefault &&
    getSavedAnanlyticsEvent(event, getAzProps('WENT_BACK')(options))

  dispatch(actionSync.GET_ANSWERS_DEFAULT())
  dispatch(actionSync.SET_QUESTION_SLIDE(0))
  dispatch(
    actionSync.SET_MODAL_FRAMES([
      {
        childName: 'QuestionScores',
        isActive: false,
        childProps: {},
      },
    ])
  )
}
