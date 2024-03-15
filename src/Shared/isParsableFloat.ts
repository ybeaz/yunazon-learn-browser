/**
 * @description Function to check if entity can be parsed as a number
 * @run ts-node src/Shared/isParsableFloat.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/isParsableFloat.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { isParsableFloat } from '../Shared/'
 */

export const isParsableFloat = (value: any): boolean => {
  try {
    return typeof parseFloat(value) === 'number' && !isNaN(parseFloat(value))
  } catch (error) {
    return false
  }
}
