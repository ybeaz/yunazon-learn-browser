import { ActionEventType } from '../../Interfaces/ActionEventType'
export const STOP_PROPAGATION: ActionEventType = (event, data) => {
  event.stopPropagation()
}
