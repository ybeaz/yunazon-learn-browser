import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch, getState } = store

export const SEND_EMAIL_DOCUMENT = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_EMAIL_SENT')(data))

  dispatch(actionAsync.SEND_EMAIL_DOCUMENT.REQUEST(data))
}
