import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch } = store

export const SET_SIDE_NAVIGATION_LEFT: ActionEventType = (event, data) => {
  event.stopPropagation()

  dispatch(actionSync.SET_SIDE_NAVIGATION_LEFT())

  getSavedAnanlyticsEvent(event, getAzProps('SIDE_PANEL_TOGGLED')())
}
