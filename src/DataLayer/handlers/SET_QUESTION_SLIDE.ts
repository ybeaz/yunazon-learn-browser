import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_QUESTION_SLIDE = (event: any, data: any): void => {
  dispatch(actionSync.SET_QUESTION_SLIDE(data))
}
