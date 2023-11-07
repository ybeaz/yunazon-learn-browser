import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const FIND_DOCUMENT: IActionEvent = (event, data) => {
  dispatch(actionAsync.FIND_DOCUMENT.REQUEST(data))
}
