import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_CHECK: ActionEventType = (event, data) => {
  dispatch(actionSync.CLICK_CHECK(data))
}
