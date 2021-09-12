import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getPrintedDocumentAs } from '../../Shared/getPrintedDocumentAs'

const { dispatch, getState } = store

export const PRINT_DOCUMENT = (event: any, data: any): void => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_PRINTED')(data))

  getPrintedDocumentAs()
}
