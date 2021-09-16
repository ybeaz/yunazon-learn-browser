import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_CHECK: IActionEvent = (event, data) => {
  dispatch(actionSync.CLICK_CHECK(data))
}
