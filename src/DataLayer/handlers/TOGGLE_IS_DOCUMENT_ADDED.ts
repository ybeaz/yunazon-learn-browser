import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_IS_DOCUMENT_ADDED: IActionEvent = (event, data) => {
  dispatch(actionSync.TOGGLE_IS_DOCUMENT_ADDED(data))
}
