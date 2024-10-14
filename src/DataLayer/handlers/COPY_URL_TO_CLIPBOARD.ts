import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getCopiedUrlToClipboard } from 'yourails_common'

export const COPY_URL_TO_CLIPBOARD: ActionEventType = (event, data) => {
  getCopiedUrlToClipboard()
}
