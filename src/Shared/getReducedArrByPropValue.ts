/**
 * @description Function to return unique array of arbitrary types of values from basic to objects
 * @param arr: any[]
 * @returns arr: any[]
 */

export const getReducedArrByPropValue: Function = (
  arr: any[],
  prop: string,
  propValue: string
): any[] => {
  return arr.filter(item => item[prop] !== propValue)
}
