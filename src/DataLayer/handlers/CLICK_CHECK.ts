import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_CHECK = (event: any, data: any): void => {
  dispatch(actionSync.CLICK_CHECK(data))
}
