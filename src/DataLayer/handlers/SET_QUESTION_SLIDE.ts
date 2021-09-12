import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_QUESTION_SLIDE = (event: any, data: any): void => {
  dispatch(actionSync.SET_QUESTION_SLIDE(data))
}
