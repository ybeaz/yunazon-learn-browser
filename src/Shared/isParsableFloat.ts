/**
 * @description Function to check if entity can be parsed as a number
 * @param value
 * @returns
 */
export const isParsableFloat: Function = (value: any): boolean => {
  try {
    return typeof parseFloat(value) === 'number' && !isNaN(parseFloat(value))
  } catch (error) {
    return false
  }
}
