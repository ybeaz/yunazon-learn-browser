import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const TOGGLE_MEDIA_LOADED = (event: any, data: any): void => {
  const { mediaKey, isMediaLoaded } = data
  dispatch(actionSync.TOGGLE_MEDIA_LOADED({ mediaKey, isMediaLoaded }))
}
