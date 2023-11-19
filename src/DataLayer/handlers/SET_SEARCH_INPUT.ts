import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const SET_SEARCH_INPUT: ActionEventType = (event, data) => {
  const { si, search, searchInput } = getParsedUrlQuery()

  const searchInputIn = !!si
    ? si
    : !!search
    ? search
    : !!searchInput
    ? searchInput
    : undefined

  dispatch(
    actionSync.SET_SEARCH_INPUT({
      searchInputIn,
    })
  )
}
