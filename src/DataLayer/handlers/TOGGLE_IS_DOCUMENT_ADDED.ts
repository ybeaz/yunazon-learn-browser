import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_IS_DOCUMENT_ADDED = (event: any, data: any): void => {
  dispatch(actionSync.TOGGLE_IS_DOCUMENT_ADDED(data))
}
