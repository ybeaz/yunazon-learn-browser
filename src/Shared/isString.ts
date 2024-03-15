interface IsStringType {
  (entity: any): boolean
}

/**
 * @description Function to determine if the input is a string
 */

export const isString: IsStringType = entity => typeof entity === 'string'
