import { DICTIONARY } from '../../Constants/dictionary.const'
import { handleEvents } from '../index.handleEvents'
import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const SEP_CLICK_BUTTON_SEARCH: IActionEvent = (event, data) => {
  const { history, path, source, value } = data

  const {
    language,
    forms: {
      searchFormSep: { selectSkillsRequired },
    },
  } = getState()

  if (!selectSkillsRequired && source === 'searchForm') {
    const message = DICTIONARY.Please_fill_required_fields[language]
    alert(message)
    return
  }

  const messege = DICTIONARY.This_functionality_is_under_development[language]
  alert(messege)
  // history.push(path)
}
