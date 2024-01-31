import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getLocalStorageSetObjTo } from '../../Shared/getLocalStorageSetObjTo'

const { getState, dispatch } = store

export const SELECT_LANGUAGE_APP: ActionEventType = (event, data) => {
  const dataNext = data?.value

  dispatch(actionSync.SELECT_LANGUAGE_APP(dataNext))
  getLocalStorageSetObjTo({ language: dataNext })
}
