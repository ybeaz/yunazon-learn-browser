import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

export const GO_BACK_FROM_CERTIFICATE: ActionEventType = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('FROM_CERTIFICATE_WENT_BACK')(data))
}
