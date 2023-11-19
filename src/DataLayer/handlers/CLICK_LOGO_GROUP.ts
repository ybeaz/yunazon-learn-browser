import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

export const CLICK_LOGO_GROUP: ActionEventType = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('LOGO_CLICKED')())
}
