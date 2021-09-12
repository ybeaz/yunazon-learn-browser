import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const STOP_PROPAGATION = (event: any, data: any): void => {
  event.stopPropagation()
}
