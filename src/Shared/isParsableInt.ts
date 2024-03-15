/**
 * @description Function to check if entity can be parsed as a number
 * @param value
 * @returns
 */
export const isParsableInt = (value: any): boolean => {
  try {
    return typeof parseInt(value, 10) === 'number'
  } catch (error) {
    return false
  }
}
