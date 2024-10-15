import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SEP_SELECT_SKILLS_OFFERED: ActionEventType = (event, data) =>
  dispatch(actionSync.SEP_SELECT_SKILLS_OFFERED(data))
