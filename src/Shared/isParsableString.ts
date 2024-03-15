/**
 * @description Function to check if entity can be parsed
 * @import import { isParsableString } from '../Shared/isParsableString'
 */
export const isParsableString = (value: any): boolean => {
  try {
    return !!JSON.parse(value)
  } catch (error) {
    return false
  }
}
