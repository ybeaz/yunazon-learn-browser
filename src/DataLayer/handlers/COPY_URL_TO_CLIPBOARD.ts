import { store } from '../store'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getCopiedUrlToClipboard } from '../../Shared/getCopiedUrlToClipboard'

const { dispatch, getState } = store

export const COPY_URL_TO_CLIPBOARD = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_LINK_COPIED')(data))

  getCopiedUrlToClipboard()
}
