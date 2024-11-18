import { actionAsync } from '../../DataLayer/index.action'
import { ActionEventType } from 'yourails_common'
import { store } from '../store'

const { dispatch, getState } = store

export const GET_COGNITO_TOKENS: ActionEventType = (event, data) =>
  dispatch(actionAsync.GET_COGNITO_TOKENS.REQUEST(data))
