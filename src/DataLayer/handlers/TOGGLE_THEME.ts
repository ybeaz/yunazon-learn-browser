import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TOGGLE_THEME: ActionEventType = event => {
  const {
    globalVars: { theme },
  } = getState()
  const data = theme === 'Dark' ? 'Light' : 'Dark'
  dispatch(actionSync.SET_THEME(data))
}
