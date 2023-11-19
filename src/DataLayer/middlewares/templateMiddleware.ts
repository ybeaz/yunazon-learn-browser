import { Middleware } from '@reduxjs/toolkit'

/**
 * @description Middleware to templateMiddleware
 * @import import { templateMiddleware } from './middlewares/templateMiddleware'
 */

export const templateMiddleware: Middleware = store => next => action => {
  console.log('Dispatching:', action)
  const result = next(action)
  console.log('Updated state:', store.getState())
  return result
}
