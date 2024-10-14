import { getArrShuffled } from './getArrShuffled'

/**
 * @description Funciton to return a set of elements from array but randomly
 * @status Required TODO: not to change the order
 */
export const getLimitedArrayElemsRandomly: Function = (arrIn: any[], limit: number): any[] => {
  const indexName = 'indexQWERTY'

  let arrNext = arrIn.map((item, index) => {
    return { [indexName]: index, ...item }
  })

  arrNext = getArrShuffled(arrNext).slice(0, limit)

  function compare(a: any, b: any) {
    if (a[indexName] < b[indexName]) {
      return -1
    }
    if (a[indexName] > b[indexName]) {
      return 1
    }
    return 0
  }

  arrNext = arrNext.sort(compare)

  arrNext = arrNext.map(item => {
    const { indexQWERTY, ...rest } = item
    return rest
  })

  return arrNext
}

// Testing and debugging
// import { getLimitedArrayElemsRandomly } from '..'
// const arrIn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arrLimitedRandom = new Array(5)
//   .fill(true)
//   .map(item => getLimitedArrayElemsRandomly(arrIn, 4))
// console.info('getLimitedArrayElemsRandomly [16]', { arrLimitedRandom })
