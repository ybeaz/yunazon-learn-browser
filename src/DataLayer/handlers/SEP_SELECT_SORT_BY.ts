import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SEP_SELECT_SORT_BY: ActionEventType = (event, data) =>
  dispatch(actionSync.SEP_SELECT_SORT_BY(data))
