import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TOGGLE_MEDIA_LOADED = (event: any, data: any): void => {
  const { mediaKey, isMediaLoaded } = data
  dispatch(actionSync.TOGGLE_MEDIA_LOADED({ mediaKey, isMediaLoaded }))
}
