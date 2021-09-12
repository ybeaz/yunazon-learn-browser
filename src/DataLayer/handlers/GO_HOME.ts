import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GO_HOME = (event: any, data: any): void => {
  const { history } = data
  history.push('/home')
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
}
