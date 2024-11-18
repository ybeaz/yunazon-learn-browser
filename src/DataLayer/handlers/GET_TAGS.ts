import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const GET_TAGS: ActionEventType = (event, data) => {
  dispatch(actionAsync.READ_TAGS.REQUEST(data))
}
