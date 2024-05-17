import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const SET_INPUT_SEARCH: ActionEventType = (event, dataIn) => {
  const { si, modulesSearch } = getParsedUrlQuery()

  const data = {
    storeFormProp: 'modulesSearch',
    value: modulesSearch,
  }
  dispatch(actionSync.SET_INPUT_TO_STORE(data))
}
