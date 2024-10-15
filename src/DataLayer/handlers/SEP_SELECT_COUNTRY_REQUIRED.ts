import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SEP_SELECT_COUNTRY_REQUIRED: ActionEventType = (event, data) =>
  dispatch(actionSync.SEP_SELECT_COUNTRY_REQUIRED(data))
