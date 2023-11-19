import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SELECT_USER_LANGUAGES: ActionEventType = (event, data) => {
  const dataNext = data.map(item => item.value)
  dispatch(actionSync.SELECT_USER_LANGUAGES(dataNext))
}
