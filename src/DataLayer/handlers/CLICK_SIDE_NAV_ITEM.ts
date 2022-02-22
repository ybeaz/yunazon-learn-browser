import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const CLICK_SIDE_NAV_ITEM: IActionEvent = (event, data) => {
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())

  dispatch(actionSync.SET_MODAL_FRAMES(data))
}
