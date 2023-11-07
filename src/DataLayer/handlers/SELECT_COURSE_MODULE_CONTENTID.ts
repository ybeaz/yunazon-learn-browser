import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SELECT_COURSE_MODULE_CONTENTID: IActionEvent = (event, data) => {
  dispatch(actionSync.SELECT_COURSE_MODULE_CONTENTID(data))
}
