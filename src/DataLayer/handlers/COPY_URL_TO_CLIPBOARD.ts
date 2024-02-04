import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getCopiedUrlToClipboard } from '../../Shared/getCopiedUrlToClipboard'

export const COPY_URL_TO_CLIPBOARD: ActionEventType = (event, data) => {
  getCopiedUrlToClipboard()
}
