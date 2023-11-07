import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_THEME: IActionEvent = (event, data) => {
  dispatch(actionSync.SET_THEME(data))
}
