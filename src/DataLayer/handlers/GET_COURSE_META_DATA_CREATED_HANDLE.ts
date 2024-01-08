import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_COURSE_META_DATA_CREATED_HANDLE: ActionEventType = (
  event,
  data
) => {
  dispatch(actionAsync.GET_COURSE_META_DATA_CREATED.REQUEST())
}
