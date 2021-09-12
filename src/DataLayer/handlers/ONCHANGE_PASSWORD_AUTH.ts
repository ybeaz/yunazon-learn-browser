import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_PASSWORD_AUTH = (event: any, data: any): void => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_PASSWORD_AUTH(value))
}
