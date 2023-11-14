import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_OAUTH_VK_SCRIPT_STATE: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_OAUTH_VK_SCRIPT_STATE(data))
}
