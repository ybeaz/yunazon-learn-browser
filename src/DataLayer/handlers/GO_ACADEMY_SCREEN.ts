import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GO_ACADEMY_SCREEN = (event: any, data: any): void => {
  const { history } = data
  history.push('/academy')
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
}
