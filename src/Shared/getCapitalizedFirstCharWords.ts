// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetCapitalizedFirstCharWordsParamsType = string

export type GetCapitalizedFirstCharWordsOptionsType = {
  isTakingAllWords: boolean
  printRes?: boolean
  parentFunction?: string
}

export type GetCapitalizedFirstCharWordsResType = string

interface GetCapitalizedFirstCharWordsType {
  (
    inputString: GetCapitalizedFirstCharWordsParamsType,
    options?: GetCapitalizedFirstCharWordsOptionsType
  ): GetCapitalizedFirstCharWordsResType
}

const optionsDefault: Required<GetCapitalizedFirstCharWordsOptionsType> = {
  isTakingAllWords: true,
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getCapitalizedFirstCharWords
 * @run ts-node src/shared/utils/getCapitalizedFirstCharWords.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getCapitalizedFirstCharWords.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getCapitalizedFirstCharWords, GetCapitalizedFirstCharWordsParamsType } from '../shared/utils/getCapitalizedFirstCharWords'
 */
export const getCapitalizedFirstCharWords: GetCapitalizedFirstCharWordsType = (
  inputString: GetCapitalizedFirstCharWordsParamsType,
  optionsIn: GetCapitalizedFirstCharWordsOptionsType = optionsDefault
) => {
  const options: Required<GetCapitalizedFirstCharWordsOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { isTakingAllWords, printRes, parentFunction } = options

  let output: GetCapitalizedFirstCharWordsResType = ''

  try {
    output = `${inputString.charAt(0).toUpperCase()}${inputString.slice(1)}`
    if (isTakingAllWords)
      output = inputString
        .split(' ')
        .map((word: string) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' ')
  } catch (error: any) {
    console.log('getCapitalizedFirstCharWords', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getCapitalizedFirstCharWords [63]', { output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getCapitalizedFirstCharWords.ts
 */
if (require.main === module) {
  ;(async () => {
    const inputString = 'my new title'
    const output = await getCapitalizedFirstCharWords(inputString, { printRes: false })
    consoler('getCapitalizedFirstCharWords [61]', output)
  })()
}
