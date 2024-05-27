import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_PAGINATION_OFFSET: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_PAGINATION_OFFSET(data))
}
