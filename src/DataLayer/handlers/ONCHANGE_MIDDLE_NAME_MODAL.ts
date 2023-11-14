import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_MIDDLE_NAME_MODAL: ActionEventType = (event, data) => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_MIDDLE_NAME_MODAL(value))
}
