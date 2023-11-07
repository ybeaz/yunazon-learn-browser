import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GET_AUTH_SIGN_UP: IActionEvent = (event, data) => {
  dispatch(actionAsync.GET_AUTH_SIGN_UP.REQUEST())
}
