import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SELECT_USER_GENDER: ActionEventType = (event, data) =>
  dispatch(actionSync.SELECT_USER_GENDER(data))
