import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch, getState } = store

export const GO_BACK_FROM_CERTIFICATE = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('FROM_CERTIFICATE_WENT_BACK')(data))
}
