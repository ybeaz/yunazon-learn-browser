import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_SCREEN_ACTIVE: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_SCREEN_ACTIVE(data))
}
