import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch } = store

export const FIND_ARTICLE: ActionEventType = (event, data) => {
  dispatch(actionAsync.FIND_ARTICLE.REQUEST(data))
}
