interface IsArrayType {
  (entity: any): boolean
}

/**
 * @description Function to determine if the input is an array
 */

export const isArray: IsArrayType = entity => Array.isArray(entity)
