import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getPrintedDocumentAs } from '../../Shared/getPrintedDocumentAs'

export const PRINT_DOCUMENT = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_PRINTED')(data))

  getPrintedDocumentAs()
}
