import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'
const { dispatch } = store

export const PRINT_SCORES = (event: any, data: any): void => {
  const { screenType, userName, capture, contentID, meta, description } = data

  getPrintScreenAsPdf({
    screenType,
    userName,
    meta,
    capture,
    description,
    contentID,
  })

  dispatch(actionSync.GET_ANSWERS_DEFAULT())
}
