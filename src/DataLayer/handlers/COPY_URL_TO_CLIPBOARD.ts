import { ActionEventType } from 'yourails_common'
import { getCopiedUrlToClipboard } from 'yourails_common'

export const COPY_URL_TO_CLIPBOARD: ActionEventType = (event, data) => {
  getCopiedUrlToClipboard()
}
