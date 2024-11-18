import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_OAUTH_GOOGLE_SCRIPT_STATE: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_OAUTH_GOOGLE_SCRIPT_STATE(data))
}
