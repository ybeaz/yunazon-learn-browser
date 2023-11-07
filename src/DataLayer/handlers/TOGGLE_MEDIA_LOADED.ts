import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_MEDIA_LOADED: IActionEvent = (event, data) => {
  const { mediaKey, isMediaLoaded } = data
  dispatch(actionSync.TOGGLE_MEDIA_LOADED({ mediaKey, isMediaLoaded }))
}
