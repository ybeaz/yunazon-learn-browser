import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_COURSES: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_COURSES(data))

  const courseID = data ? data[0]?.courseID : ''
  const moduleID = data ? data[0]?.modules[0]?.moduleID : ''
  dispatch(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))
  dispatch(actionSync.SET_COURSE_ID_ACTIVE({ courseID }))
}
