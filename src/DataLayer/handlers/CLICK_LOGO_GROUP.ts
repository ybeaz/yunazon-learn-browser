import { IActionEvent } from '../../Interfaces/IActionEvent'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

export const CLICK_LOGO_GROUP: IActionEvent = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('LOGO_CLICKED')())
}
