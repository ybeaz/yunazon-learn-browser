import { isObject } from '../Shared/isObject'

/**
 * @description Function to check if entity can be parsed as a object
 * @import import { isParsableObject } from '../Shared/isParsableObject'
 */
export const isParsableObject = (value: any): boolean => {
  try {
    const entity = JSON.parse(value)
    return isObject(entity)
  } catch (error) {
    return false
  }
}
