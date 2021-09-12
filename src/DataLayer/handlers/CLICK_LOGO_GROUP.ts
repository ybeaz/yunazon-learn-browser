import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch, getState } = store

export const CLICK_LOGO_GROUP = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('LOGO_CLICKED')())
}
