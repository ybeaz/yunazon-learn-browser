interface IsBooleanType {
  (entity: any): boolean
}

/**
 * @description Function to determine if the input is a boolean
 */

export const isBoolean: IsBooleanType = entity =>
  Boolean(entity) === entity && typeof entity === 'boolean'
