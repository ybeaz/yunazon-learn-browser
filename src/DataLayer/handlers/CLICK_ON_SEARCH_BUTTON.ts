import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_COURSES.REQUEST())
}
