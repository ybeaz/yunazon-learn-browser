import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_EMAIL_CC = (event: any, data: any): void => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_EMAIL_CC(value))
}
