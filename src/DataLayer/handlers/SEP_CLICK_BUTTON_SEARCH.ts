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
  const { history, path } = data

  const {
    language,
    forms: {
      catalogSep: { selectSkillsRequired },
    },
  } = getState()

  if (!selectSkillsRequired) {
    const message = DICTIONARY.Please_fill_required_fields[language]
    alert(message)
    return
  }

  history.push(path)
}
