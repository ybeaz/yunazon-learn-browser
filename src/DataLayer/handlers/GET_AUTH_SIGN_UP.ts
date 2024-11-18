import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GET_AUTH_SIGN_UP: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_AUTH_SIGN_UP.REQUEST())
}
