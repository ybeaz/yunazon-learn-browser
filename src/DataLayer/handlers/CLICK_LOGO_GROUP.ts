import { store } from '../store'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

export const CLICK_LOGO_GROUP = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('LOGO_CLICKED')())
}
