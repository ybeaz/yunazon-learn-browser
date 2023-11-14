import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GO_ACADEMY_SCREEN: ActionEventType = (event, data) => {
  const { history: navigate } = data
  navigate('/academy')
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
}
