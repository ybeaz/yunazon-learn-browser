import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { PAGINATION_OFFSET } from '../../Constants/pagination.const'
import { getParsedUrlQueryBrowserApi } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const SET_TAGS_CLOUD_DATA: ActionEventType = (event, dataIn) => {
  const query = getParsedUrlQueryBrowserApi()

  const tagsSearch = query?.tagsSearch || ''
  const tagsPick = (query && query?.tagsPick && query?.tagsPick.split(',')) || []
  const tagsOmit = (query && query?.tagsOmit && query?.tagsOmit.split(',')) || []
  const first =
    query && query?.[PaginationNameEnumType['pageTags']]
      ? parseInt(query?.[PaginationNameEnumType['pageTags']], 10) *
          PAGINATION_OFFSET[PaginationNameEnumType['pageTags']] -
        PAGINATION_OFFSET[PaginationNameEnumType['pageTags']]
      : 0

  dispatch(
    actionSync.SET_INPUT_TO_STORE({
      storeFormProp: 'tagsSearch',
      value: tagsSearch,
    })
  )

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
