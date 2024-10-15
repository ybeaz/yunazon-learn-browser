import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_SIDE_NAV_ITEM: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_SIDE_NAVIGATION_LEFT())

  dispatch(actionSync.SET_MODAL_FRAMES(data))
}
