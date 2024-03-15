import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetNumWithPrecisionResType = number

interface GetNumWithPrecisionType {
  (
    value: number,
    options?: { precision?: number; printRes?: boolean }
  ): GetNumWithPrecisionResType
}

/**
 * @description Function to getNumWithPrecision
 * @run ts-node src/shared/utils/getNumWithPrecision.ts
 * @import import { getNumWithPrecision } from '../src/shared/utils/getNumWithPrecision'
 */

export const getNumWithPrecision: GetNumWithPrecisionType = (
  value,
  options
) => {
  const precision = options?.precision || 0

  let output: number = 0

  try {
    const power = Math.pow(10, precision)
    output = Math.round(value * power + Number.EPSILON * power) / power

    if (options?.printRes) {
      console.log('getNumWithPrecision', { output })
      consoler('getNumWithPrecision', output)
    }
  } catch (error: any) {
    console.log('getNumWithPrecision', 'Error', error.message)
    consolerError('getNumWithPrecision', error)
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const value = 5432432.894532
  const outout = getNumWithPrecision(value, { printRes: true })
  // console.log('getConvertedType [48]', { min, max, outout })
}
