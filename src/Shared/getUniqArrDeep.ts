/**
 * @description Function to return unique array of arbitrary types of values from basic to objects
 * @param arr: any[]
 * @returns arr: any[]
 */

export const getUniqArrDeep: Function = (arr: any[]): any[] => {
  const arrStr = arr.map(item => JSON.stringify(item))
  return [...new Set(arrStr)].map(item => JSON.parse(item))
}
