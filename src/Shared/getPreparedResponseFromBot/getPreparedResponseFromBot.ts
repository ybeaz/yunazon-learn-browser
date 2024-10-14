import { promises as fs } from 'fs'

import { consoler } from '../consoler'
import { getJsonFromString01 } from './getJsonFromString01'
import { getJsonFromString02 } from './getJsonFromString02'
import { getJsonFromString03 } from './getJsonFromString03'

const PARSERS_ARRAY = [getJsonFromString01, getJsonFromString02, getJsonFromString03]

export type GetPreparedResponseFromBotParamsType = any

export type GetPreparedResponseFromBotOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetPreparedResponseFromBotResType = any[]

interface GetPreparedResponseFromBotType {
  (
    params: GetPreparedResponseFromBotParamsType,
    options?: GetPreparedResponseFromBotOptionsType
  ): GetPreparedResponseFromBotResType
}

const optionsDefault: Required<GetPreparedResponseFromBotOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getPreparedResponseFromBot
 * @link https://stackoverflow.com/questions/29674495/how-do-i-extract-json-objects-from-a-string-and-add-them-to-an-array
 * @run ts-node src/shared/utils/getPreparedResponseFromBot.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getPreparedResponseFromBot.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getPreparedResponseFromBot, GetPreparedResponseFromBotParamsType } from '../Shared/getPreparedResponseFromBot'
 */
export const getPreparedResponseFromBot: GetPreparedResponseFromBotType = (
  input: GetPreparedResponseFromBotParamsType,
  optionsIn: GetPreparedResponseFromBotOptionsType = optionsDefault
) => {
  const options: Required<GetPreparedResponseFromBotOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: GetPreparedResponseFromBotResType = []
  let isDone: boolean = false

  try {
    for (const parserFunc of PARSERS_ARRAY) {
      const { isDone, result } = parserFunc(input)

      if (isDone) {
        output = result
        break
      }
    }
  } catch (error: any) {
    console.log('getPreparedResponseFromBot', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getPreparedResponseFromBot [63]', { output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const params = ''
    const output = getPreparedResponseFromBot(params, { printRes: true })
    consoler('getPreparedResponseFromBot [61]', output)
  })()
}
