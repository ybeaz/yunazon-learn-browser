import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_SIDE_NAV_ITEM: ActionEventType = (event, data) => {
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())

  dispatch(actionSync.SET_MODAL_FRAMES(data))
}
