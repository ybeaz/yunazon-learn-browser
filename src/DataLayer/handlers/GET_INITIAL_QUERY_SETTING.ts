import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch } = store

export const GET_INITIAL_QUERY_SETTING: IActionEvent = (event, data) => {
  const { si, search, searchInput, ln, language } = getParsedUrlQuery()

  const searchInputIn = !!si
    ? si
    : !!search
    ? search
    : !!searchInput
    ? searchInput
    : undefined
  const languageIn = !!ln ? ln : !!language ? language : undefined

  dispatch(
    actionSync.GET_INITIAL_QUERY_SETTING({
      languageIn,
      searchInputIn,
    })
  )
}
