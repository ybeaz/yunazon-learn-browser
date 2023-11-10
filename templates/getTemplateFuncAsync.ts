import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetTemplateAsyncParamsType = any

export type GetTemplateAsyncResType = Promise<any>

interface GetTemplateAsyncType {
  (params: GetTemplateAsyncParamsType, options?: { printRes: boolean }): GetTemplateAsyncResType
}

/**
 * @description Function to getTemplateAsync
 * @run ts-node src/shared/utils/getTemplateAsync.ts
 * @import import { getTemplateAsync } from './getTemplateAsync'
 */

export const getTemplateAsync: GetTemplateAsyncType = async (params, options) => {
  try {
    const res = await ''

    if (options?.printRes) {
      consoler('getTemplateAsync', 'res', res)
    }

    return res
  } catch (error: any) {
    consolerError('getTemplateAsync', error)
    return
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
} else {
  // This code will run if the file is imported as a module
  console.log('This file is being imported as a module.')
}
