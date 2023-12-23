import { getRandomNumBetween } from './getRandomNumBetween'

export type GetArrayElemPickedRandomlyParamsType = any[]

export type GetArrayElemPickedRandomlyOptionsType = {
  printRes?: boolean
  parentFunction?: string
  numberToPick?: number
}

export type GetArrayElemPickedRandomlyResType = any[]

interface GetArrayElemPickedRandomlyType {
  (
    params: GetArrayElemPickedRandomlyParamsType,
    options?: GetArrayElemPickedRandomlyOptionsType
  ): GetArrayElemPickedRandomlyResType
}

const optionsDefault: Required<GetArrayElemPickedRandomlyOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
  numberToPick: 6,
}

/**
 * @description Function to getArrayElemPickedRandomly
 * @run ts-node src/Shared/getArrayElemPickedRandomly.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/getArrayElemPickedRandomly.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getArrayElemPickedRandomly, GetArrayElemPickedRandomlyOptionsType } from '../Shared/getArrayElemPickedRandomly'
 */
export const getArrayElemPickedRandomly: GetArrayElemPickedRandomlyType = (
  inputArray: GetArrayElemPickedRandomlyParamsType,
  optionsIn: GetArrayElemPickedRandomlyOptionsType = optionsDefault
) => {
  const options: Required<GetArrayElemPickedRandomlyOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const {
    printRes,
    parentFunction,
    numberToPick = optionsDefault['numberToPick'],
  } = options

  let output: any[] = inputArray

  try {
    let randomNumArrLimited: number[] = []
    if (inputArray.length <= numberToPick) {
      output = inputArray
    } else {
      while (randomNumArrLimited.length < numberToPick) {
        const randomNum = getRandomNumBetween(0, inputArray.length - 1)
        const randomNumCeil = Math.floor(randomNum)
        randomNumArrLimited = [...randomNumArrLimited, randomNumCeil]
        randomNumArrLimited = [...new Set(randomNumArrLimited)].sort(
          (a: any, b: any) => a - b
        )
        // console.info('getArrayElemPickedRandomly [58]', { randomNumArrLimited })
      }

      // console.info('\ngetArrayElemPickedRandomly [60]', { randomNumArrLimited })

      output = inputArray.filter((_: any, index: number) =>
        randomNumArrLimited.includes(index)
      )
    }

    if (printRes) {
      console.log('\ngetArrayElemPickedRandomly [74]', {
        randomNumArrLimited,
        randomNumArrLimitedLen: randomNumArrLimited.length,
        inputArray,
      })
    }
  } catch (error: any) {
    console.log('getArrayElemPickedRandomly', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getArrayElemPickedRandomly.ts
 */
if (require.main === module) {
  ;(async () => {
    const inputArray = [
      { a: 0 },
      { c: 1 },
      { d: 2 },
      { e: 3 },
      { f: 4 },
      { g: 5 },
    ] // [{ a: 0 }, { c: 1 }, { d: 2 }, { e: 3 }, { f: 4 }, { g: 5 }]

    for (let i = 0; i < 100; i += 1) {
      const output = getArrayElemPickedRandomly(inputArray, {
        printRes: true,
        numberToPick: 4,
      })
      // console.log('getArrayElemPickedRandomly [60]', { output })
    }
  })()
}
