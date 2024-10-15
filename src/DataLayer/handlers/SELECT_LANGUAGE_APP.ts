import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { getLocalStorageSetObjTo } from 'yourails_common'

const { getState, dispatch } = store

export const SELECT_LANGUAGE_APP: ActionEventType = (event, data) => {
  const dataNext = data?.value

  dispatch(actionSync.SELECT_LANGUAGE_APP(dataNext))
  getLocalStorageSetObjTo({ language: dataNext })
}
