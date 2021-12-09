interface IisNumber {
  (n: any): boolean
}

/**
 * @description Function to determine if the input is a number
 */

export const isNumber: IisNumber = n => Number(n) === n
