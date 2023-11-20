import { isObject } from './isObject'
import { isLiteral } from './isLiteral'

export type GetObjectClearedParamsType = any

export type GetObjectClearedResType = any

interface GetObjectClearedType {
  (
    params: GetObjectClearedParamsType,
    options?: { propsToRemove?: string[]; printRes?: boolean }
  ): GetObjectClearedResType
}

/**
 * @description Function to getObjectCleared
 * @link https://stackoverflow.com/a/24648941/4791116
 * @run ts-node src/shared/utils/getObjectCleared.ts
 * @test yarn jest getObjectCleared.test.ts
 * @import import { getObjectCleared } from '../Shared/getObjectCleared'
 */
export const getObjectCleared: GetObjectClearedType = (entity, options) => {
  const propsToRemove = options?.propsToRemove || []

  if (!propsToRemove || !propsToRemove.length) return entity

  const gdcc = '__getDeepCircularCopy__'

  if (entity !== Object(entity)) {
    return entity // primitive value
  }

  const set = gdcc in entity
  const cache = entity[gdcc]
  let result: any

  if (set && typeof cache == 'function') {
    return cache()
  } else
    entity[gdcc] = function () {
      return result
    }

  // overwrite
  if (entity instanceof Array) {
    result = []
    for (var i = 0; i < entity.length; i++) {
      result[i] = getObjectCleared(entity[i], options)
    }
  } else {
    result = {}
    for (var prop in entity) {
      if (propsToRemove.includes(prop)) continue
      else if (prop != gdcc)
        result[prop] = getObjectCleared(entity[prop], options)
      else if (set) result[prop] = getObjectCleared(cache, options)
    }
  }

  if (set) {
    entity[gdcc] = cache // reset
  } else {
    delete entity[gdcc] // unset again
  }

  if (options?.printRes) {
    console.log('getObjectCleared [67]', { result })
  }

  return result
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = ''
  const outout = getObjectCleared(input, { printRes: true })
  console.log('getConvertedType [48]', { input, outout })
}
