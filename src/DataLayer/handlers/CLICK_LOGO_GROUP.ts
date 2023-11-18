import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

export const CLICK_LOGO_GROUP: ActionEventType = (event, data) => {
  console.info('CLICK_LOGO_GROUP [6]')
  getSavedAnanlyticsEvent(event, getAzProps('LOGO_CLICKED')())
}
