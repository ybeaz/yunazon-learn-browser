import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'

const { getState, dispatch } = store

export const SELECT_LANGUAGE_APP: ActionEventType = (event, data) => {
  const dataNext = data?.value

  getSavedAnanlyticsEvent(event, getAzProps('APP_LANGUAGE_SELECTED')(dataNext))

  console.info('SELECT_LANGUAGE_APP [14]', { dataNext })
  dispatch(actionSync.SELECT_LANGUAGE_APP(dataNext))
  getSetObjToLocalStorage({ language: dataNext })
}
