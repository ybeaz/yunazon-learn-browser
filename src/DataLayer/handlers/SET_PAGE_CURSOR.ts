import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import {
  RootStoreType,
  PaginationDict,
  PaginationNameEnumType,
} from '../../Interfaces/RootStoreType'
import { PaginationType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'

const { dispatch, getState } = store

export const SET_PAGE_CURSOR_HANDLE: ActionEventType = (event, data) => {
  const { componentsState } = getState() as RootStoreType
  const pagination: PaginationDict = componentsState.pagination

  const direction = data?.direction || 'next'
  const paginationName: PaginationNameEnumType = data?.paginationName

  const paginationSlice: PaginationType = pagination[paginationName]
  const { first = 0, offset, hasNextPage } = paginationSlice

  let firstNext = 0

  if (direction === 'next' && hasNextPage) firstNext = first + offset
  else if (direction === 'next' && !hasNextPage) firstNext = first
  else if (direction === 'prev' && first >= offset) firstNext = first - offset

  console.info('SET_PAGE_CURSOR [30]', { paginationName, first, firstNext })

  dispatch(actionSync.SET_PAGE_CURSOR({ paginationName, first: firstNext }))

  if (paginationName === PaginationNameEnumType['pageCourses'])
    dispatch(actionAsync.GET_COURSES.REQUEST())
  else if (paginationName === PaginationNameEnumType['pageDocuments'])
    dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
}

export const SET_PAGE_CURSOR: ActionEventType = withDebounce(
  SET_PAGE_CURSOR_HANDLE,
  500
)
