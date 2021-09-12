import { handleEvents } from '../index.handleEvents'

export const SEND_AUTH_FORGET_PASSWORD = (event: any, data: any): void => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
