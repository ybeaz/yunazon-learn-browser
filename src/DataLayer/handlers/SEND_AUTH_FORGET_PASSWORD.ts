import { ActionEventType } from 'yourails_common'
import { handleEvents } from '../index.handleEvents'

export const SEND_AUTH_FORGET_PASSWORD: ActionEventType = (event, data) => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
