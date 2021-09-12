import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SELECT_COURSE_MODULE_CONTENTID = (event: any, data: any): void => {
  dispatch(actionSync.SELECT_COURSE_MODULE_CONTENTID(data))
}
