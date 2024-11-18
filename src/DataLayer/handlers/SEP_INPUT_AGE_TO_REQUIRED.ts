import { isParsableFloat } from 'yourails_common'
import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SEP_INPUT_AGE_TO_REQUIRED: ActionEventType = event => {
  const value = isParsableFloat(event.target.value) ? parseInt(event.target.value, 10) : ''
  dispatch(actionSync.SEP_INPUT_AGE_TO_REQUIRED(value))
}
