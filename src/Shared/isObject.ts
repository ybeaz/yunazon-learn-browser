export type isObjectParamsType = any

export type isObjectResType = boolean

interface isObjectType {
  (obj: isObjectParamsType, options?: { printRes: boolean }): isObjectResType
}

/**
 * @description Function to isObject
 * @import import { isObject } from './Shared/isObject'
 */

export const isObject: isObjectType = (obj, options) => {
  if (options?.printRes) {
    console.log('isObject', 'obj.constructor.name', obj.constructor.name)
  }

  return obj != null && obj.constructor.name === 'Object'
}
