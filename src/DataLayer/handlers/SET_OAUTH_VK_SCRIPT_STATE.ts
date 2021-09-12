import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_OAUTH_VK_SCRIPT_STATE = (event: any, data: any): void => {
  dispatch(actionSync.SET_OAUTH_VK_SCRIPT_STATE(data))
}
