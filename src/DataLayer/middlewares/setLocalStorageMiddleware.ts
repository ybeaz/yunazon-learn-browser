import { Middleware } from '@reduxjs/toolkit'

import { AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY } from 'yourails_common'
import { getDebouncedFunc } from 'yourails_common'
import { getLocalStorageStoreStateSet, GetLocalStorageStoreStateSetType } from 'yourails_common'
import { RootStoreType } from 'src/Interfaces'

/**
 * @description Function to run setLocalStorageMiddleware
 * @import import { getRefreshedAuthAwsCongito } from './middlewares/getRefreshedAuthAwsCongito'
 */
const getLocalStorageStoreStateSetCallback = (...args: any) => {
  const storeState = args[0]
  getLocalStorageStoreStateSet({
    source: 'getLocalStorageStoreStateSetCallback [13]',
    storeState,
    rootStoreDefault: storeState,
  })
}

const debouncedFunc = getDebouncedFunc(
  getLocalStorageStoreStateSetCallback,
  AWS_COGNITO_REFRESH_AUTH_TOKEN_DELAY
)

/**
 * @status DEPRECIATED, NOT USED, BUT WORKING
 * @description Middleware to setLocalStorageMiddleware
 * @import import { setLocalStorageMiddleware } from './middlewares/setLocalStorageMiddleware'
 */
export const setLocalStorageMiddleware: Middleware = store => next => action => {
  const result = next(action)

  const { type: actionType } = action
  const actionsMandatoryToSetLocalStorage = ['SET_AUTH_AWS_COGNITO_USER_DATA', 'SET_DOCUMENTS']

  const storeState = store.getState()

  if (actionsMandatoryToSetLocalStorage.includes(actionType)) {
    getLocalStorageStoreStateSetCallback(storeState)
  } else if (storeState) debouncedFunc(storeState)

  return result
}
