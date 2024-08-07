import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GET_TAGS: ActionEventType = (event, data) => {
  dispatch(actionAsync.READ_TAGS.REQUEST(data))
}
