interface GetDebouncedFuncType {
  (callback: (...args: any) => any, limit: number): (...args: any) => void
}

/**
 * @description Function to getDebouncedFunc
 * @import import { getDebouncedFunc } from '../../../Shared/getDebouncedFunc'
 */

export const getDebouncedFunc: GetDebouncedFuncType = (callback, delay) => {
  let timeoutHandler: boolean = true

  return function () {
    if (timeoutHandler === true) {
      timeoutHandler = false
      // @ts-ignore
      const context: any = this
      const args = arguments
      callback.apply(context, args)

      setTimeout(() => {
        timeoutHandler = true
      }, delay)
    }
  }
}
