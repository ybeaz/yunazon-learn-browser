import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_SAVE_PROFILE: ActionEventType = (event, data) =>
  dispatch(actionAsync.SAVE_USER_PROFILE.REQUEST())
