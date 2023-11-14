import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const SELECT_SKILLS_OFFERED: ActionEventType = (event, data) => {
  const arrSelected =
    event.target.selectedOptions &&
    Array.from(event.target.selectedOptions, (option: any) => option.value)
}
