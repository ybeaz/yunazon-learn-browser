import { Middleware } from '@reduxjs/toolkit'
import { getLocalStorageSetObjTo } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { ModuleType } from 'yourails_common'

/**
 * @description Function to setLocalStorageCoursesInProgress, for now only one active
 * @import import { getLocalStorageStoreStateSetCallback } from './middlewares/getLocalStorageStoreStateSetCallback'
 */
const setLocalStorageCoursesInProgress = (...args: any) => {
  const storeState = args[0]

  const moduleIDActive: string = storeState.scorm.moduleIDActive
  const modules: any[] = storeState.modules

  const module = getModuleByModuleID({
    modules,
    moduleID: moduleIDActive || '',
  })

  getLocalStorageSetObjTo({
    modulesInProgress: [module],
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
