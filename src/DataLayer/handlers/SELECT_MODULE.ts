import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SELECT_MODULE: ActionEventType = (
  event,
  data: Record<'capture' | 'moduleID' | 'contentID', string> = {
    capture: '',
    moduleID: '',
    contentID: '',
  }
) => {
  dispatch(actionSync.SELECT_MODULE(data))
}
