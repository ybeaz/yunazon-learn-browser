import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_IS_SUMMARY: ActionEventType = (event, data) => {
  dispatch(actionSync.TOGGLE_IS_SUMMARY(data))
}
