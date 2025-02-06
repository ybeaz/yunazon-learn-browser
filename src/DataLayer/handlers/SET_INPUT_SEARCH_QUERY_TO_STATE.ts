import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_INPUT_SEARCH_QUERY_TO_STATE: ActionEventType = (event, dataIn) => {
  const { queryUrl } = getState()

  Object.keys(queryUrl).forEach((queryName: string) => {
    const data = {
      storeFormProp: queryName,
      value: queryUrl[queryName],
    }
    dispatch(actionSync.SET_INPUT_TO_STORE(data))
  })
}
