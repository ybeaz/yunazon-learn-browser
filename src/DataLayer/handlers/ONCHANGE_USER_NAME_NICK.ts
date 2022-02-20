import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_USER_NAME_NICK: IActionEvent = (event, data) => {
  const value = event?.target?.value as HTMLInputElement

  const valueNext = value ? value : data

  dispatch(actionSync.ONCHANGE_USER_NAME_NICK(valueNext))
}
