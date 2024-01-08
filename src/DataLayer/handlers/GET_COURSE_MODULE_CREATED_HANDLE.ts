import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_COURSE_MODULE_CREATED_HANDLE: ActionEventType = (
  event,
  data
) => {
  dispatch(actionAsync.GET_COURSE_MODULE_CREATED.REQUEST())
}
