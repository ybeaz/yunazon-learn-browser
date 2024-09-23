import { promises as fs } from 'fs'

import { consoler } from '../consoler'
import { consolerError } from '../consolerError'
import { isStringJsonParsable } from '../../Shared/isStringJsonParsable'

export type GetJsonFromString03ParamsType = any

export type GetJsonFromString03OptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetJsonFromString03ResType = {
  isDone: boolean
  result: any[]
}

interface GetJsonFromString03Type {
  (
    params: GetJsonFromString03ParamsType,
    options?: GetJsonFromString03OptionsType
  ): GetJsonFromString03ResType
}

const optionsDefault: Required<GetJsonFromString03OptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getJsonFromString03
 * @run ts-node src/shared/utils/getJsonFromString03.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getJsonFromString03.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getJsonFromString03, GetJsonFromString03ParamsType } from '../Shared/getJsonFromString03'
 */
export const getJsonFromString03: GetJsonFromString03Type = (
  input: GetJsonFromString03ParamsType,
  optionsIn: GetJsonFromString03OptionsType = optionsDefault
) => {
  const options: Required<GetJsonFromString03OptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: GetJsonFromString03ResType['result'] = []
  let isDone: GetJsonFromString03ResType['isDone'] = false

  try {
    const regex = /[{\[]{1}([,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]|".*?")+[}\]]{1}/gim

    const matches = input.match(regex) || []
    output = [...matches.map((m: string) => JSON.parse(m))].flat(12)

    if (Array.isArray(output) && output.length > 0) isDone = true
  } catch (error: any) {
    console.log('getJsonFromString03', 'Error', {
      parentFunction,
      message: error.messag,
    })
    throw new Error(`1st approach does not work for ${input.slice(0, 128)}...`)
  } finally {
    if (printRes) {
      console.log('getJsonFromString03 [63]', { output })
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
    const output = getJsonFromString03(params, { printRes: true })
    consoler('getJsonFromString03 [61]', output)
  })()
}
