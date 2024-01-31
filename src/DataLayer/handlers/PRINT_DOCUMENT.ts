import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getPrintedDocumentAs } from '../../Shared/getPrintedDocumentAs'

export const PRINT_DOCUMENT: ActionEventType = (event, data) => {
  getPrintedDocumentAs()
}
