export type IsObjectParamsType = any

export type IsObjectResType = boolean

interface IsObjectType {
  (entity: IsObjectParamsType, options?: { printRes: boolean }): IsObjectResType
}

/**
 * @description Function to isObject
 * @import import { isObject } from '../Shared/isObject'
 */

export const isObject: IsObjectType = (entity, options) => {
  if (options?.printRes) {
    console.log('isObject', 'obj.constructor.name', entity.constructor.name)
  }

  return entity != null && entity.constructor.name === 'Object'
}
