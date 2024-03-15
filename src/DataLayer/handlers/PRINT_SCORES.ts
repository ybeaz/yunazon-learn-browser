import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'
const { dispatch } = store

export const PRINT_SCORES: ActionEventType = (event, data: any) => {
  const { screenType, userName, capture, contentID, meta, description } = data

  getPrintScreenAsPdf({
    screenType,
    userName,
    meta,
    capture,
    description,
    contentID,
  })

  dispatch(actionSync.GET_ANSWERS_DEFAULT_DEPRECIATED())
}
