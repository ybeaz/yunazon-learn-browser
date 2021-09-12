import { store } from '../store'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GET_AUTH_SIGN_IN = (event: any, data: any): void => {
  dispatch(actionAsync.GET_AUTH_SIGN_IN.REQUEST())
}
