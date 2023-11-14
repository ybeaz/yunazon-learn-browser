import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch } = store

export const SEP_INPUT_DESCRIPTION_REQUIRED: ActionEventType = event =>
  dispatch(actionSync.SEP_INPUT_DESCRIPTION_REQUIRED(event.target.value))
