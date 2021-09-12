import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GO_ACADEMY_SCREEN = (event: any, data: any): void => {
  const { history } = data
  history.push('/academy')
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
}
