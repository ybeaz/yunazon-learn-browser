import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_START_MODULE: ActionEventType = (event, data: any) => {
  const { isStarting } = data
  dispatch(actionSync.TOGGLE_START_MODULE(isStarting))
}
