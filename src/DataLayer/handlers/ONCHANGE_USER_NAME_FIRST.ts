import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_USER_NAME_FIRST: ActionEventType = (event, data) =>
  dispatch(actionSync.ONCHANGE_USER_NAME_FIRST(event.target.value))
