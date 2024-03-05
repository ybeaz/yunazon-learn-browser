import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getRedirected, getSlug } from '../../Shared/'

const { dispatch } = store

export const SELECT_MODULE: ActionEventType = async (
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
    console.error(error)
  }
}
