import { getRandomNumBetween } from './getRandomNumBetween'

/**
 * @description Function to shuffle array elements
 * @param arrIn
 * @returns
 */
export const getArrShuffled: Function = (arrIn: any[]): any[] => {
  const arr = arrIn
    .map(itemA => {
      const random = getRandomNumBetween(0, arrIn.length)
      const item = itemA
      const obj = { random, item }
      return obj
    })
    .sort(function (a, b) {
      return a.random - b.random
    })
  const res = arr.map(itemB => {
    return itemB.item
  })
  return res
}
