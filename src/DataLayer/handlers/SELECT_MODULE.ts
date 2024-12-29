import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SELECT_MODULE: ActionEventType = (
  event,
  data: Record<'capture' | 'moduleID' | 'contentID', any> = {
    capture: '',
    moduleID: '',
    contentID: '',
  }
) => {
  try {
    dispatch(actionSync.SELECT_MODULE(data))
  } catch (error) {
    console.error('SELECT_MODULE [26]', error)
  }
}
