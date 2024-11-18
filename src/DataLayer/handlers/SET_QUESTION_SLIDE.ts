import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_QUESTION_SLIDE: ActionEventType = data => {
  dispatch(actionSync.SET_QUESTION_SLIDE(data))
}
