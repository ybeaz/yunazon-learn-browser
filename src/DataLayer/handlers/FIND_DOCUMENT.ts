import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const FIND_DOCUMENT: ActionEventType = (event, data) => {
  dispatch(actionAsync.FIND_DOCUMENT.REQUEST(data))
}
