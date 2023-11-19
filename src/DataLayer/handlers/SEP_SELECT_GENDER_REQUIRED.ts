import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SEP_SELECT_GENDER_REQUIRED: ActionEventType = (event, data) =>
  dispatch(actionSync.SEP_SELECT_GENDER_REQUIRED(data))
