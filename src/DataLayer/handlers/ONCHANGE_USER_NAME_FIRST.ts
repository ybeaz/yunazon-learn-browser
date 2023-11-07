import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_USER_NAME_FIRST: IActionEvent = (event, data) =>
  dispatch(actionSync.ONCHANGE_USER_NAME_FIRST(event.target.value))
