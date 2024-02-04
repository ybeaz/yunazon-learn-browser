interface IsDefinedType {
  (entity: any): boolean
}

/**
 * @description Function to determine if the input is defined
 */

export const isDefined: IsDefinedType = entity => (entity ? true : false)
