import { Middleware } from '@reduxjs/toolkit'

import { AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY } from '../../Constants/aws.const'
import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { actionAsync } from '../../DataLayer/index.action'

/**
 * @description Function to run refreshAuthMiddleware
 * @import import { getRefreshedAuthAwsCongito } from './middlewares/getRefreshedAuthAwsCongito'
 */
const getRefreshedAuthAwsCongito = (...args: any) => {
  const store = args[0]
  const refresh_token = args[1]
  const { dispatch } = store
  dispatch(
    actionAsync.GET_REFRESHED_USER_AUTH_AWS_COGNITO_ASYNC.REQUEST({
      refresh_token,
    })
  )
}

const debouncedFunc = getDebouncedFunc(
  getRefreshedAuthAwsCongito,
  AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY
)

/**
 * @description Middleware to refreshAuthMiddleware
 * @import import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
 */
export const refreshAuthMiddleware: Middleware = store => next => action => {
  // TODO Implement localStorage for ios and android

  const refresh_token = localStorage.getItem('refresh_token')
  if (refresh_token) debouncedFunc(store, refresh_token)
  const { userIdDataAwsCognito } = store.getState()

  console.info('refreshAuthMiddleware [37]', userIdDataAwsCognito)
  const result = next(action)
  return result
}
