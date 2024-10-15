import { ActionEventType } from 'yourails_common'
import { handleEvents } from '../index.handleEvents'

export const CREATE_COURSE: ActionEventType = (event, data) => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
