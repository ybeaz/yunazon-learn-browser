import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const FIND_DOCUMENT = (event: any, data: any): void => {
  dispatch(actionAsync.FIND_DOCUMENT.REQUEST(data))
}
