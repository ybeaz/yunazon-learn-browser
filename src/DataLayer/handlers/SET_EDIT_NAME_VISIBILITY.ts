import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_EDIT_NAME_VISIBILITY: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_EDIT_NAME_VISIBILITY_STATE(data))
}
