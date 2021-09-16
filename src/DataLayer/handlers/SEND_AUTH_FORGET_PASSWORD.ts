import { IActionEvent } from '../../Interfaces/IActionEvent'
import { handleEvents } from '../index.handleEvents'

export const SEND_AUTH_FORGET_PASSWORD: IActionEvent = (event, data) => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
