import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_OAUTH_FB_SCRIPT_STATE: IActionEvent = (event, data) => {
  dispatch(actionSync.SET_OAUTH_FB_SCRIPT_STATE(data))
}
