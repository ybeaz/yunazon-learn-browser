import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_MODAL_FRAMES = (event: any, data: any): void => {
  dispatch(actionSync.SET_MODAL_FRAMES(data))
}
