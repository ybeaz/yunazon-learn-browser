import { getRandomNumBetween } from './getRandomNumBetween'

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
