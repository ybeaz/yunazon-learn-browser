import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CREATE_DOCUMENT: ActionEventType = (event, data) => {
  dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))
}
