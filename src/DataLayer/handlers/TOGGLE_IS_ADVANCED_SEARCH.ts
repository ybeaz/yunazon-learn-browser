import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const TOGGLE_IS_ADVANCED_SEARCH: ActionEventType = () => {
  const {
    componentsState: { isSepAdvancedSearch },
  } = getState()
  dispatch(actionSync.SET_IS_ADVANCED_SEARCH(!isSepAdvancedSearch))
}
