import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_SIDE_NAVIGATION_LEFT: ActionEventType = (event, data) => {
  event.stopPropagation()

  dispatch(actionSync.SET_SIDE_NAVIGATION_LEFT(data))
}
