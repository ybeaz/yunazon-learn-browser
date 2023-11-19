import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'

export const SAVE_ANALYTICS_INIT_DATA: ActionEventType = (event, data) => {
  getSavedAnanlyticsInitData()
}
