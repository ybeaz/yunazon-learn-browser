export type IsLiteralParamsType = any

export type IsLiteralResType = boolean

interface IsLiteralType {
  (
    entity: IsLiteralParamsType,
    options?: { printRes: boolean }
  ): IsLiteralResType
}

/**
 * @description Function to isLiteral
 * @import import { isLiteral } from '../Shared/isLiteral'
 */

export const isLiteral: IsLiteralType = (entity, options) => {
  if (options?.printRes) {
    console.log('isLiteral', 'entity', entity)
  }

  return (
    entity instanceof String ||
    entity instanceof Number ||
    entity instanceof Boolean
  )
}
