import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_CHECK: ActionEventType = (event, data) => {
  dispatch(actionSync.CLICK_CHECK(data))
}
