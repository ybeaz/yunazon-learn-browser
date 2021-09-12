import { store } from '../store'
import { handleEvents } from '../index.handleEvents'

const { dispatch, getState } = store

export const SEND_AUTH_FORGET_PASSWORD = (event: any, data: any): void => {
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
