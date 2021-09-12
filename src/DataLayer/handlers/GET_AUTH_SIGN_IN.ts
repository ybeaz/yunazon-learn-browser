import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_AUTH_SIGN_IN = (event: any, data: any): void => {
  dispatch(actionAsync.GET_AUTH_SIGN_IN.REQUEST())
}
