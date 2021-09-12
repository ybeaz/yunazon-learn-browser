import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

export const GO_BACK_FROM_CERTIFICATE = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('FROM_CERTIFICATE_WENT_BACK')(data))
}
