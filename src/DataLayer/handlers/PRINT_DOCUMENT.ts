import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getPrintedDocumentAs } from 'yourails_common'

export const PRINT_DOCUMENT: ActionEventType = (event, data) => {
  getPrintedDocumentAs()
}
