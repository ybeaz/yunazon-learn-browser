import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const TOGGLE_IS_ADVANCED_SEARCH: IActionEvent = () => {
  const {
    componentsState: { isSepAdvancedSearch },
  } = getState()
  dispatch(actionSync.SET_IS_ADVANCED_SEARCH(!isSepAdvancedSearch))
}
