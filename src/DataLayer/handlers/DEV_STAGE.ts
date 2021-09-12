import { store } from '../store'
import { DICTIONARY } from '../../Constants/dictionary.const'

const { getState } = store

export const DEV_STAGE = (event: any, data: any): void => {
  const { language } = getState()
  const message = DICTIONARY.weAreWorkingOnThis[language]
  alert(message)
}
