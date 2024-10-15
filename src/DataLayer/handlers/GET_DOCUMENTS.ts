import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_DOCUMENTS: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
}
