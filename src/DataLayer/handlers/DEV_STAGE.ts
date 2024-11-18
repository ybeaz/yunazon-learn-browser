import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'

const { getState } = store

export const DEV_STAGE: ActionEventType = (event, data) => {
  const { language } = getState()
  const message = DICTIONARY.weAreWorkingOnThis[language]
  alert(message)
}
