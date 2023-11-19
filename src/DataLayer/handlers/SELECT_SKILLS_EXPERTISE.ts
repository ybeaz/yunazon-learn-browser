import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SELECT_SKILLS_EXPERTISE: ActionEventType = (event, data) =>
  dispatch(actionSync.SELECT_SKILLS_EXPERTISE(data))
