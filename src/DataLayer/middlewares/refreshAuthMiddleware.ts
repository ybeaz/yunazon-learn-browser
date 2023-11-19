import { Middleware } from '@reduxjs/toolkit'

import { AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY } from '../../Constants/aws.const'
import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { actionAsync } from '../../DataLayer/index.action'
import { getConvertedType } from '../../Shared/getConvertedType'
import { getLocalStorageStoreStateRead } from '../../Shared/getLocalStorageStoreStateRead'

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
    'INIT_LOADING',
    'GET_AUTH_AWS_COGNITO_USER_DATA',
    'GET_AUTH_AWS_COGNITO_USER_REFRESHED',
    'GET_AUTH_AWS_COGNITO_USER_REVOKED',
  ]

  if (!actionType.includes(actionsNotToRefreshAuth)) {
    let refresh_token = null

    const storeStateApp = store.getState()
    const refresh_token_App =
      storeStateApp?.authAwsCognitoUserData?.refresh_token

    const storeStateLocalStorage = getLocalStorageStoreStateRead()
    const refresh_token_LocalStorage =
      storeStateLocalStorage?.authAwsCognitoUserData?.refresh_token

    if (refresh_token_App) refresh_token = refresh_token_App
    else if (refresh_token_LocalStorage)
      refresh_token = refresh_token_LocalStorage

    if (refresh_token) debouncedFunc(store, refresh_token)
  }

  return result
}
