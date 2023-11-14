import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SELECT_COURSE_MODULE_CONTENTID: ActionEventType = (
  event,
  data
) => {
  dispatch(actionSync.SELECT_COURSE_MODULE_CONTENTID(data))
}
