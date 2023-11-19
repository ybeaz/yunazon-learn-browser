import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GO_SCREEN: ActionEventType = (event, data) => {
  const { history: navigate, path } = data
  navigate(path)
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION_LEFT())
}
