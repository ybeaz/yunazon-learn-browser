import { ActionEventType } from 'yourails_common'
export const STOP_PROPAGATION: ActionEventType = (event, data) => {
  event.stopPropagation()
}
