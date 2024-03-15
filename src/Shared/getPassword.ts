import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

import { getRandomNumBetween } from './getRandomNumBetween'
import { getNumWithPrecision } from './getNumWithPrecision'

export type GetPasswordParamsType = string

export type GetPasswordResType = string

interface GetPasswordType {
  (
    param: GetPasswordParamsType,
    options?: { charsNotAlphanumeric?: string[]; printRes?: boolean }
  ): GetPasswordResType
}

/**
 * @description Function to getPassword
 * @run ts-node src/shared/utils/getPassword.ts
 * @import import { getPassword } from '../shared/utils/getPassword'
 */

export const getPassword: GetPasswordType = (param, options) => {
  let output: string = param

  try {
    const charsNotAlphanumeric = options?.charsNotAlphanumeric || []
    const paramLen = param.length

    charsNotAlphanumeric.forEach((char: string) => {
      const numRandomBetween = getRandomNumBetween(0, paramLen, false)
      const indexToInsert = getNumWithPrecision(numRandomBetween, {
        precision: 0,
      })

      const paramArr = output.split('')
      paramArr[indexToInsert] = char
      output = paramArr.join('')
    })

    if (options?.printRes) {
      // console.log('getPassword', { output })
      consoler('getPassword', output)
    }
  } catch (error: any) {
    // console.log('getPassword', 'Error', error.message)
    consolerError('getPassword', error)
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = '1SfbHQsZQpDtumM8roh8M'
  const outout = getPassword(input, {
    charsNotAlphanumeric: ['!', '_', '#'],
    printRes: true,
  })
  // console.log('getConvertedType [48]', { input, outout })
}
