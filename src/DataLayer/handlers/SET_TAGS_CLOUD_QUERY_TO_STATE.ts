import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { PAGINATION_OFFSET } from 'yourails_common'

const { dispatch, getState } = store

export const SET_TAGS_CLOUD_QUERY_TO_STATE: ActionEventType = (event, dataIn) => {
  const { queryUrl: query } = getState()

  const tagsPick = (query && query?.tagsPick && query?.tagsPick.split(',')) || []
  const tagsOmit = (query && query?.tagsOmit && query?.tagsOmit.split(',')) || []
  const first =
    query && query?.[PaginationNameEnumType['pageTags']]
      ? parseInt(query?.[PaginationNameEnumType['pageTags']], 10) *
          PAGINATION_OFFSET[PaginationNameEnumType['pageTags']] -
        PAGINATION_OFFSET[PaginationNameEnumType['pageTags']]
      : 0

  dispatch(
    actionSync.SET_TAGS_STATE({
      tagsPick,
      tagsOmit,
    })
  )

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageTags'],
      first,
    })
  )
}
