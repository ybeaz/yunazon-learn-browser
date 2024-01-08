// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetPreparedResponseFromBotParamsType = any

export type GetPreparedResponseFromBotOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetPreparedResponseFromBotResType = Promise<any>

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

  try {
    output = JSON.parse(input)
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
    console.log('getPreparedResponseFromBot [60]', { params, output })
    consoler('getPreparedResponseFromBot [61]', 'output', output)
  })()
}
