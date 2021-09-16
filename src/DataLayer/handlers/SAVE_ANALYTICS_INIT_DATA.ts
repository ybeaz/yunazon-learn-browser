import { IActionEvent } from '../../Interfaces/IActionEvent'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'

export const SAVE_ANALYTICS_INIT_DATA: IActionEvent = (event, data) => {
  getSavedAnanlyticsInitData()
}
