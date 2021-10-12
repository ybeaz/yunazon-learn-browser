import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GO_HOME: IActionEvent = (event, data) => {
  const { history, path } = data
  history.push(path)
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
}
