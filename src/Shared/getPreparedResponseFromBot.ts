import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'
import { isStringJsonParsable } from '../Shared/isStringJsonParsable'

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
    if (isStringJsonParsable(input)) output = JSON.parse(input)
    else {
      console.info('getPreparedResponseFromBot [52]', { input })
      output = new Function(`return [${input}];`)()
    }

    if (output.length === 1 && Array.isArray(output[0])) output = output[0]
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
