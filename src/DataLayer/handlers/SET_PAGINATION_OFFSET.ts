import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_PAGINATION_OFFSET: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_PAGINATION_OFFSET(data))
}
