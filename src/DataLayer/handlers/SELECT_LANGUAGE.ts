import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'

const { dispatch } = store

export const SELECT_LANGUAGE = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('LANGUAGE_SELECTED')(data))

  dispatch(actionSync.SELECT_LANGUAGE(data))
  getSetObjToLocalStorage({ language: data })
}
