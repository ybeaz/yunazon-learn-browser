import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from 'yourails_common'

const { dispatch, getState } = store

export const SET_PAGE_CURSOR_HANDLE: ActionEventType = (event, data) => {
  const direction = data?.direction || 'next'
  const first = data?.first || 0
  const paginationName: PaginationNameEnumType = data?.paginationName

  dispatch(actionSync.SET_PAGE_CURSOR({ paginationName, first, direction }))

  if (paginationName === PaginationNameEnumType['pageModules'])
    dispatch(actionAsync.READ_MODULES_CONNECTION.REQUEST())
  else if (paginationName === PaginationNameEnumType['pageDocuments'])
    dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
  else if (paginationName === PaginationNameEnumType['pageTags'])
    dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
}

export const SET_PAGE_CURSOR: ActionEventType = withDebounce(SET_PAGE_CURSOR_HANDLE, 500)
