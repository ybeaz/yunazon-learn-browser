import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch, getState } = store

export const TOGGLE_START_COURSE = (event: any, data: any): void => {
  const { isStarting, courseCapture, courseID, moduleID, contentID } = data
  event?.preventDefault &&
    isStarting &&
    getSavedAnanlyticsEvent(
      event,
      getAzProps('MODULE_STARTED')({
        courseCapture,
        courseID,
        moduleID,
        contentID,
      })
    )

  dispatch(actionSync.TOGGLE_START_COURSE(isStarting))
}
