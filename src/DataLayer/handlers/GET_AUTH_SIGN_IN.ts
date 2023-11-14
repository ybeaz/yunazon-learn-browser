import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GET_AUTH_SIGN_IN: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_AUTH_SIGN_IN.REQUEST())
}
