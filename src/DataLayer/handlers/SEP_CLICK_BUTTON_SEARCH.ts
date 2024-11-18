import { DICTIONARY } from 'yourails_common'
import { handleEvents } from '../index.handleEvents'
import { store } from '../store'
import { ActionEventType } from 'yourails_common'

const { dispatch, getState } = store

export const SEP_CLICK_BUTTON_SEARCH: ActionEventType = (event, data) => {
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
