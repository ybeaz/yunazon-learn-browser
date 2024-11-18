import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_SIGN_OUT: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_AUTH_AWS_COGNITO_USER_REVOKED.REQUEST())
}
