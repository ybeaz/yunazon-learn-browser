import { ActionEventType } from 'yourails_common'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'

export const SAVE_ANALYTICS_INIT_DATA: ActionEventType = (event, data) => {
  getSavedAnanlyticsInitData()
}
