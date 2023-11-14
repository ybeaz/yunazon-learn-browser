import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getCopiedUrlToClipboard } from '../../Shared/getCopiedUrlToClipboard'

export const COPY_URL_TO_CLIPBOARD: ActionEventType = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_LINK_COPIED')(data))

  getCopiedUrlToClipboard()
}
