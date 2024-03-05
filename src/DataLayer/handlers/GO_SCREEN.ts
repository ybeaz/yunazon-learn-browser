import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GO_SCREEN: ActionEventType = (event, data) => {
  const navigate = data && data?.navigate
  const pathname = data && data?.pathname
  if (navigate && pathname) {
    navigate(pathname)
    dispatch(actionSync.SET_SIDE_NAVIGATION_LEFT())
  }
}
