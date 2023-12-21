import { getRandomNumBetween } from './getRandomNumBetween'

export type GetArrayElemPickedRandomlyParamsType = {
  inputArray: any[]
  numberToPick: number
}

export type GetArrayElemPickedRandomlyOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetArrayElemPickedRandomlyResType = any[]

interface GetArrayElemPickedRandomlyType {
  (
    params: GetArrayElemPickedRandomlyParamsType,
    options?: GetArrayElemPickedRandomlyOptionsType
  ): GetArrayElemPickedRandomlyResType
}

const optionsDefault: GetArrayElemPickedRandomlyOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getArrayElemPickedRandomly
 * @run ts-node src/Shared/getArrayElemPickedRandomly.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/getArrayElemPickedRandomly.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getArrayElemPickedRandomly, GetArrayElemPickedRandomlyParamsType } from '../Shared/getArrayElemPickedRandomly'
 */
export const getArrayElemPickedRandomly: GetArrayElemPickedRandomlyType = (
  params: GetArrayElemPickedRandomlyParamsType,
  optionsIn: GetArrayElemPickedRandomlyOptionsType = optionsDefault
) => {
  const options: GetArrayElemPickedRandomlyOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options
  const { inputArray, numberToPick } = params

  let output: any[] = []

  try {
    let randomNumArrLimited: number[] = []
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

    if (printRes) {
      console.log('\ngetArrayElemPickedRandomly [43]', { randomNumArrLimited })
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
 * @
 */
if (require.main === module) {
  ;(async () => {
    const params = {
      inputArray: [{ a: 0 }, { c: 1 }, { d: 2 }, { e: 3 }, { f: 4 }, { g: 5 }],
      numberToPick: 4,
    }

    for (let i = 0; i < 100; i += 1) {
      const output = await getArrayElemPickedRandomly(params, {
        printRes: true,
      })
      console.log('getArrayElemPickedRandomly [60]', { output })
    }
  })()
}
