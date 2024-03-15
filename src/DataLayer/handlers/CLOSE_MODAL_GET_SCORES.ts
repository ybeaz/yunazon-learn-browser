import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLOSE_MODAL_GET_SCORES: ActionEventType = (event, data) => {
  dispatch(actionSync.GET_ANSWERS_DEFAULT())
  dispatch(actionSync.SET_QUESTION_SLIDE(0))
  dispatch(actionSync.SET_MODAL_FRAMES([]))
}
