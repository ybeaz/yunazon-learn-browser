interface IsNumberType {
  (entity: any): boolean
}

/**
 * @description Function to determine if the input is a number
 */

export const isNumber: IsNumberType = entity =>
  Number(entity) === entity && typeof entity === 'number'
