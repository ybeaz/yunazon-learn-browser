import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { queryUrlKeys } from '../../Interfaces/RootStoreType'

const { dispatch, getState } = store

export const SET_QUERY_URL_HANDLER: ActionEventType = (event, dataIn) => {
  const { isReplacing, query: queryIn } = dataIn
  const { queryUrl: queryUrlState } = getState()
  const queryUrl = getParsedUrlQueryBrowserApi()

  console.info('SET_QUERY_URL_HANDLER', { queryUrlKeys, queryUrl, isReplacing })

  let query = isReplacing ? queryUrl : { ...queryUrlState, ...queryUrl }
  if (queryIn) query = isReplacing ? queryIn : { ...queryUrlState, ...queryUrl, ...queryIn }
  query = queryUrlKeys.reduce((accum: any, key: string) => {
    const obj = {}
    if (query[key]) obj[key] = query[key]
    return { ...accum, ...obj }
  }, {})
  dispatch(actionSync.SET_QUERY_URL_STATE({ query }))
}
