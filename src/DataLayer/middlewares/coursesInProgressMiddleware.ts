import { Middleware } from '@reduxjs/toolkit'
import { getLocalStorageSetObjTo } from '../../Shared/getLocalStorageSetObjTo'

/**
 * @description Function to setLocalStorageCoursesInProgress, for now only one active
 * @import import { getLocalStorageStoreStateSetCallback } from './middlewares/getLocalStorageStoreStateSetCallback'
 */
const setLocalStorageCoursesInProgress = (...args: any) => {
  const storeState = args[0]

  // const courses = storeState.courses
  // const coursesJsonString = JSON.stringify(courses)
  getLocalStorageSetObjTo({
    modulesInProgress: storeState.modules,
  })
}

/**
 * @description Middleware to coursesInProgressMiddleware
 * @import import { coursesInProgressMiddleware } from './middlewares/coursesInProgressMiddleware'
 */
export const coursesInProgressMiddleware: Middleware = store => next => action => {
  const result = next(action)

  const { type: actionType } = action
  const actionsMandatoryToSetLocalStorage = ['CLICK_CHECK']

  const storeState = store.getState()

  if (actionsMandatoryToSetLocalStorage.includes(actionType)) {
    setLocalStorageCoursesInProgress(storeState)
  }

  return result
}
