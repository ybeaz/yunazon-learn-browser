import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import {
  RootStoreType,
  PaginationDict,
  PaginationNameEnumType,
} from '../../Interfaces/RootStoreType'
import { PaginationType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from 'yourails_common'

const { dispatch, getState } = store

export const SET_PAGE_CURSOR_HANDLE: ActionEventType = (event, data) => {
  const { componentsState } = getState() as RootStoreType
  const pagination: PaginationDict = componentsState.pagination

  const direction = data?.direction || 'next'
  const paginationName: PaginationNameEnumType = data?.paginationName

  const paginationSlice: PaginationType = pagination[paginationName]
  const { first = 0, offset, hasNextPage } = paginationSlice

  let firstNext = data?.first || 0

  if (direction === 'set') firstNext = firstNext
  else if (direction === 'next' && hasNextPage) firstNext = first + offset
  else if (direction === 'next' && !hasNextPage) firstNext = first
  else if (direction === 'prev' && first >= offset) firstNext = first - offset

  dispatch(actionSync.SET_PAGE_CURSOR({ paginationName, first: firstNext }))

  if (paginationName === PaginationNameEnumType['pageModules'])
    dispatch(actionAsync.GET_MODULES.REQUEST())
  else if (paginationName === PaginationNameEnumType['pageDocuments'])
    dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
  else if (paginationName === PaginationNameEnumType['pageTags'])
    dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
}

export const SET_PAGE_CURSOR: ActionEventType = withDebounce(SET_PAGE_CURSOR_HANDLE, 500)
