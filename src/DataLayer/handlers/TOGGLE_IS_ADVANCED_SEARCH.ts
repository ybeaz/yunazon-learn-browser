import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TOGGLE_IS_ADVANCED_SEARCH: ActionEventType = () => {
  const {
    componentsState: { isSepAdvancedSearch },
  } = getState()
  dispatch(actionSync.SET_IS_ADVANCED_SEARCH(!isSepAdvancedSearch))
}
