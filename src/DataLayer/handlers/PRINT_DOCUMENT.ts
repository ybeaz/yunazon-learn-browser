import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getPrintedDocumentAs } from '../../Shared/getPrintedDocumentAs'

export const PRINT_DOCUMENT: ActionEventType = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_PRINTED')(data))

  getPrintedDocumentAs()
}
