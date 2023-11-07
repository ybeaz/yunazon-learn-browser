import { actionAsync } from '../../DataLayer/index.action'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { store } from '../store'

const { dispatch, getState } = store

export const GET_COGNITO_TOKENS: IActionEvent = (event, data) =>
  dispatch(actionAsync.GET_COGNITO_TOKENS.REQUEST(data))
