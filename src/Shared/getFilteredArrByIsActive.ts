/**
 * @description Funciton to get uniq array with isActive === true or empty array
 * @param arr: any[],
 * @param aggregateByName: string  Property name by what we take only those,
 *        which has not any false
 */

export const getFilteredArrByIsActive: Function = (
  arr: any[],
  aggregateByName: string
): any[] => {
  return arr.filter(item1 => {
    const arrGroupIsNotActive = arr
      .filter(item2 => item2[aggregateByName] === item1[aggregateByName])
      .filter(item3 => item3.isActive === false)

    return arrGroupIsNotActive.length === 0
  })
}
