import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_DOCUMENTS: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
}
