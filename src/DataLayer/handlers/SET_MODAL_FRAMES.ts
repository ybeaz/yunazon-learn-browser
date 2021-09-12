import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_MODAL_FRAMES = (event: any, data: any): void => {
  dispatch(actionSync.SET_MODAL_FRAMES(data))
}
