import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_FIRST_NAME_MODAL: IActionEvent = (event, data) => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_FIRST_NAME_MODAL(value))
}
