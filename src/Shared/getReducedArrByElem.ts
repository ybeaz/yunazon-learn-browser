/**
 * @description Function to return unique array of arbitrary types of values from basic to objects
 * @param arr: any[]
 * @returns arr: any[]
 */

export const getReducedArrByElem: Function = (
  arr: any[],
  elemToCompare: any
): any[] => {
  return arr
    .map(elem => JSON.stringify(elem))
    .filter(elem => elem !== JSON.stringify(elemToCompare))
    .filter(
      elem =>
        elem !==
        JSON.stringify({ ...elemToCompare, isActive: !elemToCompare.isActive })
    )
    .map(elem => JSON.parse(elem))
}
