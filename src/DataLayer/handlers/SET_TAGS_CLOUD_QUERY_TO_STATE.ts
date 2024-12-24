import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from 'yourails_common'

const { dispatch, getState } = store

export const SET_TAGS_CLOUD_QUERY_TO_STATE: ActionEventType = (event, dataIn) => {
  const { queryUrl: query } = getState()

  const first = (query && query?.[PaginationNameEnumType['pageTags']]) || 0

  dispatch(actionSync.SET_TAGS_STATE())

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageTags'],
      first,
    })
  )
}
