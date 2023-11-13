import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetTemplateFuncAsyncParamsType = any

export type GetTemplateFuncAsyncResType = Promise<any>

interface GetTemplateFuncAsyncType {
  (
    params: GetTemplateFuncAsyncParamsType,
    options?: { printRes: boolean }
  ): GetTemplateFuncAsyncResType
}

/**
 * @description Function to getTemplateFuncAsync
 * @run ts-node src/shared/utils/getTemplateFuncAsync.ts
 * @import import { getTemplateFuncAsync } from './getTemplateFuncAsync'
 */

export const getTemplateFuncAsync: GetTemplateFuncAsyncType = async (
  params,
  options
) => {
  let res: any[] = []

  try {
    res = await []

    if (options?.printRes) {
      console.log('getMappedConnectionToRes', { res })
      consoler('getMappedConnectionToRes', 'res', res)
    }
  } catch (error: any) {
    console.log('getMappedConnectionToRes', 'Error', error.message)
    consolerError('getMappedConnectionToRes', error)
  } finally {
    return res
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
