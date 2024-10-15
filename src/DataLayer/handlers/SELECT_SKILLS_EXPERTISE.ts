import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SELECT_SKILLS_EXPERTISE: ActionEventType = (event, data) =>
  dispatch(actionSync.SELECT_SKILLS_EXPERTISE(data))
