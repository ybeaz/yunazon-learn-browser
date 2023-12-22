// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetTemplateFuncAsyncParamsType = any

export type GetTemplateFuncAsyncOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetTemplateFuncAsyncResType = Promise<any>

interface GetTemplateFuncAsyncType {
  (
    params: GetTemplateFuncAsyncParamsType,
    options?: GetTemplateFuncAsyncOptionsType
  ): GetTemplateFuncAsyncResType
}

const optionsDefault: GetTemplateFuncAsyncOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getTemplateFuncAsync
 * @run ts-node src/shared/utils/getTemplateFuncAsync.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getTemplateFuncAsync.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getTemplateFuncAsync, GetTemplateFuncAsyncParamsType } from '../Shared/getTemplateFuncAsync'
 */
export const getTemplateFuncAsync: GetTemplateFuncAsyncType = async (
  params: GetTemplateFuncAsyncParamsType,
  optionsIn: GetTemplateFuncAsyncOptionsType = optionsDefault
) => {
  const options: GetTemplateFuncAsyncOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: any[] = []

  try {
    output = await []

    if (printRes) {
      console.log('getTemplateFuncAsync [43]', { output })
      consoler('getTemplateFuncAsync [44]', 'output', {
        parentFunction,
        output,
      })
    }
  } catch (error: any) {
    console.log('getTemplateFuncAsync', 'Error', {
      parentFunction,
      message: error.messag,
    })
    consolerError('getTemplateFuncAsync', { parentFunction, ...error })
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const input = ''
    const output = await getTemplateFuncAsync(input, { printRes: true })
    console.log('getTemplateFuncAsync [60]', { input, output })
    consoler('getTemplateFuncAsync [61]', 'output', output)
  })()
}
