import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_USER_NAME_FIRST: ActionEventType = (event, data) =>
  dispatch(actionSync.ONCHANGE_USER_NAME_FIRST(event.target.value))
