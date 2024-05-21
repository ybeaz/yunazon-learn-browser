import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const SET_INPUT_SEARCH_FROM_QUERY: ActionEventType = (event, dataIn) => {
  const query = getParsedUrlQuery()

  Object.keys(query).forEach((queryName: string) => {
    const data = {
      storeFormProp: queryName,
      value: query[queryName],
    }
    dispatch(actionSync.SET_INPUT_TO_STORE(data))
  })
}
