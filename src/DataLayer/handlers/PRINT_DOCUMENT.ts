import { ActionEventType } from 'yourails_common'
import { getPrintedDocumentAs } from 'yourails_common'

export const PRINT_DOCUMENT: ActionEventType = (event, data) => {
  getPrintedDocumentAs()
}
