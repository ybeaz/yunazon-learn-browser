/**
 * @description Function to check if entity can be parsed as a number
 * @run ts-node src/Shared/isStringJsonParsable.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/isStringJsonParsable.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { isStringJsonParsable } from '../Shared/'
 */

export const isStringJsonParsable = (value: string): boolean => {
  try {
    JSON.parse(value)
  } catch (e) {
    return false
  }
  return true
}
