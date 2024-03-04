import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
// import { getRedirected, getSlug } from '../../Shared/'

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

  // const { moduleID, capture } = data
  // const slug = getSlug(capture)
  // const pathname = `/m/${moduleID}/${slug}`
  // console.info('SELECT_MODULE [21]', { pathname })
  // getRedirected(pathname)
}
