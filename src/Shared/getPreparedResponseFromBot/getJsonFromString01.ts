import { promises as fs } from 'fs'

import { consoler } from '../consoler'
import { consolerError } from '../consolerError'
import { isStringJsonParsable } from '../../Shared/isStringJsonParsable'

export type GetJsonFromString01ParamsType = any

export type GetJsonFromString01OptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetJsonFromString01ResType = {
  isDone: boolean
  result: any[]
}

interface GetJsonFromString01Type {
  (
    params: GetJsonFromString01ParamsType,
    options?: GetJsonFromString01OptionsType
  ): GetJsonFromString01ResType
}

const optionsDefault: Required<GetJsonFromString01OptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getJsonFromString01
 * @run ts-node src/shared/utils/getJsonFromString01.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getJsonFromString01.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getJsonFromString01, GetJsonFromString01ParamsType } from '../Shared/getJsonFromString01'
 */
export const getJsonFromString01: GetJsonFromString01Type = (
  input: GetJsonFromString01ParamsType,
  optionsIn: GetJsonFromString01OptionsType = optionsDefault
) => {
  const options: Required<GetJsonFromString01OptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: GetJsonFromString01ResType['result'] = []
  let isDone: GetJsonFromString01ResType['isDone'] = false

  try {
    if (isStringJsonParsable(input)) output = JSON.parse(input)

    if (Array.isArray(output) && output.length > 0) isDone = true
  } catch (error: any) {
    console.log('getJsonFromString01', 'Error', {
      parentFunction,
      message: error.messag,
    })
    throw new Error(`3rd approach does not work for ${input.slice(0, 128)}...`)
  } finally {
    if (printRes) {
      console.log('getJsonFromString01 [63]', { output })
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
    const output = getJsonFromString01(params, { printRes: true })
    consoler('getJsonFromString01 [61]', output)
  })()
}
