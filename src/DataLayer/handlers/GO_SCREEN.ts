import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { GO_LINK_PATH } from './GO_LINK_PATH'
const { dispatch } = store

export const GO_SCREEN: ActionEventType = (event, data) => {
  if (data.pathname) GO_LINK_PATH({}, data)
  dispatch(actionSync.SET_SIDE_NAVIGATION_LEFT(data))
}
