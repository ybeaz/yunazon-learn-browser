import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { CLICK_ON_SEARCH_BUTTON } from './CLICK_ON_SEARCH_BUTTON'
import { SCREENS_DICT } from 'yourails_common'
import { ScreensEnumType } from 'yourails_common'

const { dispatch } = store
let valuePrev = ''

export const ONCHANGE_INPUT_SEARCH: ActionEventType = (event, dataIn) => {
  const storeFormGroup = dataIn && dataIn.storeFormGroup
  const storeFormProp = dataIn && dataIn.storeFormProp
  const value = (dataIn && dataIn?.value) || (event?.target?.value as string) || ''

  const data = {
    storeFormGroup,
    storeFormProp,
    value,
  }

  dispatch(actionSync.SET_INPUT_TO_STORE(data))

  valuePrev = value
}
