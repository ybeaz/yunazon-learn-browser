import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_LAST_NAME_MODAL: IActionEvent = (event, data) => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_LAST_NAME_MODAL(value))
}
