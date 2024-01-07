import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_COURSE_CREATE_SUBMIT: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_COURSE_CREATED.REQUEST())
}
