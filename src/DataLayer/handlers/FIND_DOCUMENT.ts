import { store } from '../store'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const FIND_DOCUMENT = (event: any, data: any): void => {
  dispatch(actionAsync.FIND_DOCUMENT.REQUEST(data))
}
