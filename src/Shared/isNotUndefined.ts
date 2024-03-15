interface IsNotUndefinedType {
  (entity: any): boolean
}

/**
 * @description Function to determine if the input is defined
 */

export const isNotUndefined: IsNotUndefinedType = entity =>
  typeof entity !== 'undefined'
