import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const SEP_SELECT_LANGUAGE_REQUIRED: IActionEvent = (event, data) => {
  const dataNext = data.map(item => item.value)
  dispatch(actionSync.SEP_SELECT_LANGUAGE_REQUIRED(dataNext))
}
