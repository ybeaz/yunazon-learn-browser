import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetTemplateFuncAsyncParamsType = any

export type GetTemplateFuncAsyncResType = Promise<any>

interface GetTemplateFuncAsyncType {
  (
    params: GetTemplateFuncAsyncParamsType,
    options?: { printRes?: boolean }
  ): GetTemplateFuncAsyncResType
}

/**
 * @description Function to getTemplateFuncAsync
 * @run ts-node src/shared/utils/getTemplateFuncAsync.ts
 * @import import { getTemplateFuncAsync } from '../Shared/getTemplateFuncAsync'
 */

export const getTemplateFuncAsync: GetTemplateFuncAsyncType = async (
  params,
  options
) => {
  let output: any[] = []

  try {
    output = await []

    if (options?.printRes) {
      console.log('getTemplateFuncAsync', { output })
      consoler('getTemplateFuncAsync', 'output', output)
    }
  } catch (error: any) {
    console.log('getTemplateFuncAsync', 'Error', error.message)
    consolerError('getTemplateFuncAsync', error)
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = ''
  const output = getTemplateFuncAsync(input, { printRes: true })
  console.log('getConvertedType [48]', { input, output })
  consoler('getTemplateFuncAsync', 'output', output)
}
