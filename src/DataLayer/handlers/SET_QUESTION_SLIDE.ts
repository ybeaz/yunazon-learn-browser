import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_QUESTION_SLIDE: IActionEvent = data => {
  dispatch(actionSync.SET_QUESTION_SLIDE(data))
}
