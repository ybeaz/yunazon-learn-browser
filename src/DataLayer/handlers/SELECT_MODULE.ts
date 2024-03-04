import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getRedirected } from '../../Shared/getRedirected'
import { getSlug } from '../../Shared/getSlug'

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

  const { capture, moduleID } = data
  const slug = getSlug(capture)
  const pathname = `/m/${moduleID}/${slug}`
  getRedirected(pathname)
}
