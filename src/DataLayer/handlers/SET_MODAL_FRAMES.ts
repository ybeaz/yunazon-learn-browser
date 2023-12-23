import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_MODAL_FRAMES: ActionEventType = (event, data) => {
  console.info('SET_MODAL_FRAMES handler [8]', { data })
  dispatch(actionSync.SET_MODAL_FRAMES(data))
}
