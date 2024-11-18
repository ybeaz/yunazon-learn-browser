import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_MODULE_MODULE_CREATED_HANDLE: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_MODULE_MODULE_CREATED.REQUEST())
}
