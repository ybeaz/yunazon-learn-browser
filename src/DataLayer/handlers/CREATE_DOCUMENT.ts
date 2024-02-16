import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CREATE_DOCUMENT: ActionEventType = (event, data) => {
  dispatch(actionAsync.UPDATE_PROFILE.REQUEST())
  dispatch(actionAsync.CREATE_DOCUMENT.REQUEST(data))
}
