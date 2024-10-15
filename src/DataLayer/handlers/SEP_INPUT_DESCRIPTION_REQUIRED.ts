import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SEP_INPUT_DESCRIPTION_REQUIRED: ActionEventType = event =>
  dispatch(actionSync.SEP_INPUT_DESCRIPTION_REQUIRED(event.target.value))
