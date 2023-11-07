import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch } = store

export const TOGGLE_SIDE_NAVIGATION: IActionEvent = (event, data) => {
  event.stopPropagation()

  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())

  getSavedAnanlyticsEvent(event, getAzProps('SIDE_PANEL_TOGGLED')())
}
