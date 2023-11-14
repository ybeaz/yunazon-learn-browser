import { ActionEventType } from '../../Interfaces/ActionEventType'
import { handleEvents } from '../index.handleEvents'

export const SEND_AUTH_FORGET_PASSWORD: ActionEventType = (event, data) => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
