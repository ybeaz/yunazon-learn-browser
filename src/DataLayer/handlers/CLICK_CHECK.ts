import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_CHECK = (event: any, data: any): void => {
  dispatch(actionSync.CLICK_CHECK(data))
}
