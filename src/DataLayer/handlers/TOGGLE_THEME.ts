import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TOGGLE_THEME: IActionEvent = event => {
  const {
    globalVars: { theme },
  } = getState()
  const data = theme === 'Dark' ? 'Light' : 'Dark'
  console.info('TOGGLE_THEME [12]', { data })
  dispatch(actionSync.SET_THEME(data))
}
