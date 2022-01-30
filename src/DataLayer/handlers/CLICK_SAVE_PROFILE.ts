import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const CLICK_SAVE_PROFILE: IActionEvent = (event, data) => {
  const {
    forms: { profile },
  } = getState()
  console.info('CLICK_SAVE_PROFILE [11]', { profile })
}
