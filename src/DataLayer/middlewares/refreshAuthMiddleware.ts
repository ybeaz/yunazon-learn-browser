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
    actionAsync.GET_AUTH_AWS_COGNITO_USER_REFRESHED.REQUEST({
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
  const result = next(action)

  const { type: actionType } = action
  const actionsNotToRefreshAuth = [
    'SET_AUTH_AWS_COGNITO_USER_DATA',
    'SET_SIDE_NAVIGATION_LEFT',
    'SELECT_LANGUAGE_APP',
    'SET_IS_LOADED_LOCAL_STORAGE_STORE_STATE',
    'GET_AUTH_DATA_REQUEST',
    'GET_MATRIX_DATA_REQUEST',
    'GET_AUTH_AWS_COGNITO_USER_DATA_REQUEST',
    'GET_AUTH_AWS_COGNITO_USER_REFRESHED_REQUEST',
    'GET_AUTH_AWS_COGNITO_USER_REVOKED_REQUEST',
  ]

  if (!actionsNotToRefreshAuth.includes(actionType)) {
    console.info('refreshAuthMiddleware [43]', { actionType })
    debouncedFunc(store)
  }

  return result
}
