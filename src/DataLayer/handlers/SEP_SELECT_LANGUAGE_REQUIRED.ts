import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const SEP_SELECT_LANGUAGE_REQUIRED: IActionEvent = (event, data) => {
  console.info('SEP_SELECT_LANGUAGE_REQUIRED [11]', { data, value: data.value })
  dispatch(actionSync.SEP_SELECT_LANGUAGE_REQUIRED(data.value))
}
