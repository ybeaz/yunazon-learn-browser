import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getRedirected, getSlug } from '../../Shared/'

const { dispatch } = store

export const SELECT_MODULE: ActionEventType = async (
  event,
  data: Record<'capture' | 'moduleID' | 'contentID' | 'navigate', any> = {
    capture: '',
    moduleID: '',
    contentID: '',
    navigate: () => {},
  }
) => {
  try {
    dispatch(actionSync.SELECT_MODULE(data))

    const { moduleID, capture, navigate } = data
    const slug = getSlug(capture)
    const pathname = `/m/${moduleID}/${slug}`
    await navigate(pathname)
  } catch (error) {
    console.error(error)
  }
}
