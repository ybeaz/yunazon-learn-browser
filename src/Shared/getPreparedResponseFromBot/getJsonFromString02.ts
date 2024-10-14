import { promises as fs } from 'fs'

import { consoler } from '../consoler'

export type GetJsonFromString02ParamsType = any

export type GetJsonFromString02OptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetJsonFromString02ResType = {
  isDone: boolean
  result: any[]
}

interface GetJsonFromString02Type {
  (
    params: GetJsonFromString02ParamsType,
    options?: GetJsonFromString02OptionsType
  ): GetJsonFromString02ResType
}

const optionsDefault: Required<GetJsonFromString02OptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getJsonFromString02
 * @run ts-node src/shared/utils/getJsonFromString02.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getJsonFromString02.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getJsonFromString02, GetJsonFromString02ParamsType } from '../Shared/getJsonFromString02'
 */
export const getJsonFromString02: GetJsonFromString02Type = (
  input: GetJsonFromString02ParamsType,
  optionsIn: GetJsonFromString02OptionsType = optionsDefault
) => {
  const options: Required<GetJsonFromString02OptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: GetJsonFromString02ResType['result'] = []
  let isDone: GetJsonFromString02ResType['isDone'] = false

  try {
    output = new Function(`return [${input}];`)()

    if (output.length === 1 && Array.isArray(output[0])) output = output[0]
    if (Array.isArray(output) && output.length > 0) isDone = true
  } catch (error: any) {
    console.log('getJsonFromString02', 'Error', {
      parentFunction,
      message: error.messag,
    })
    throw new Error(`2nd approach does not work for ${input.slice(0, 128)}...`)
  } finally {
    if (printRes) {
      console.log('getJsonFromString02 [63]', { output })
    }

    return { isDone, result: output }
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const params = ''
    const output = getJsonFromString02(params, { printRes: true })
    consoler('getJsonFromString02 [61]', output)
  })()
}
