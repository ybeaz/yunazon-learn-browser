import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SELECT_LANGUAGE_APP_INIT: IActionEvent = (event, data) => {
  const { ln, language } = getParsedUrlQuery()

  const languageOut = !!ln ? ln : !!language ? language : undefined

  dispatch(actionSync.SELECT_LANGUAGE_APP(languageOut))
}
