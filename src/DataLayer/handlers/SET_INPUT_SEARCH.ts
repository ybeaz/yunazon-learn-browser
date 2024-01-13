import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

const { dispatch, getState } = store

export const SET_INPUT_SEARCH: ActionEventType = (event, dataIn) => {
  const { si, search, inputSearch } = getParsedUrlQuery()

  const inputSearchIn = !!si
    ? si
    : !!search
      ? search
      : !!inputSearch
        ? inputSearch
        : undefined

  const data = {
    storeFormProp: 'inputSearch',
    value: inputSearchIn,
  }
  dispatch(actionSync.SET_INPUT_TO_STORE(data))
}
