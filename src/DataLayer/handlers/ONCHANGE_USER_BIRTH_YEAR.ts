import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const ONCHANGE_USER_BIRTH_YEAR: ActionEventType = (event, data) => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_USER_BIRTH_YEAR(value))
}
