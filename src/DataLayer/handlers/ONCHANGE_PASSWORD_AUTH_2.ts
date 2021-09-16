import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_PASSWORD_AUTH_2: IActionEvent = (event, data) => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_PASSWORD_AUTH_2(value))
}
