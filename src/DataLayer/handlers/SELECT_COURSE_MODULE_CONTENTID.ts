import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SELECT_COURSE_MODULE_CONTENTID = (event: any, data: any): void => {
  dispatch(actionSync.SELECT_COURSE_MODULE_CONTENTID(data))
}
