export type GetConvertedTypeParamsType = any

export type GetConvertedTypeResType = any

interface GetConvertedTypeType {
  (
    value: GetConvertedTypeParamsType,
    options?: { printRes: boolean }
  ): GetConvertedTypeResType
}

/**
 * @description Function to getConvertedType
 * @run ts-node src/Shared/getConvertedType.ts
 * @import import { getConvertedType } from '../Shared/getConvertedType'
 */

export const getConvertedType: GetConvertedTypeType = (value, options) => {
  let output: any
  try {
    output = new Function(`return ${value};`)()

    if (options?.printRes) {
      console.log('getConvertedType [27]', { output })
    }
  } catch (error: any) {
    // console.log('getConvertedTypeRes', 'Error', error.message)
    output = value
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = 'undefined'
  const outout = getConvertedType(input, { printRes: true })
  console.log('getConvertedType [38]', { input, outout })
}
