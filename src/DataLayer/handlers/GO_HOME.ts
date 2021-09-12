import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GO_HOME = (event: any, data: any): void => {
  const { history } = data
  history.push('/home')
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
}
