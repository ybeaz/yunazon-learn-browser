import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const ADD_DOCUMENT: ActionEventType = (event, data) => {
  const {
    courses,
    scorm: { moduleIDActive },
  } = getState()
  const options = getResultDataFromStore(courses, moduleIDActive)
  event?.preventDefault &&
    getSavedAnanlyticsEvent(
      event,
      getAzProps('PERSONAL_DATA_SUBMITTED')(options)
    )

  dispatch(actionAsync.ADD_DOCUMENT.REQUEST(data))
}
