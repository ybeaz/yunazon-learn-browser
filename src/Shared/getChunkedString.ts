import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetChunkedStringParamsType = {
  input: string
  output?: string[]
}

export type GetChunkedStringOptionsType = {
  printRes?: boolean
  parentFunction?: string
  chunkCharacters?: string[]
  chunkSize?: number
  maxSearch?: number
}

export type GetChunkedStringResType = string[]

interface GetChunkedStringType {
  (
    params: GetChunkedStringParamsType,
    options?: GetChunkedStringOptionsType
  ): GetChunkedStringResType
}

const paramsDefault: Required<GetChunkedStringParamsType> = {
  input: '',
  output: [],
}

const optionsDefault: Required<GetChunkedStringOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
  chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
  chunkSize: 5500,
  maxSearch: 128,
}

/**
 * @description Function to getChunkedString
 * @run ts-node src/Shared/getChunkedString.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/getChunkedString.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getChunkedString, GetChunkedStringParamsType, GetChunkedStringOptionsType } from 'src/Shared/getChunkedString'
 */
export const getChunkedString: GetChunkedStringType = (
  paramsIn: GetChunkedStringParamsType,
  optionsIn: GetChunkedStringOptionsType = optionsDefault
) => {
  const params: Required<GetChunkedStringParamsType> = {
    ...paramsDefault,
    ...paramsIn,
  }
  const options: Required<GetChunkedStringOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { input, output } = params

  const { chunkCharacters, chunkSize, maxSearch, printRes, parentFunction } =
    options

  /* Protection against chunkSize < maxSearch, Warning */
  if (chunkSize < maxSearch) {
    console.log('getChunkedString [66]', {
      message: 'chunkSize < maxSearch',
      input,
      chunkSize,
      maxSearch,
    })
    return []
  }

  /* If input less than chunkSize we output it as one chunk */
  if (input.length < chunkSize || input.length < maxSearch) {
    return [input]
  }

  let inputArrTemp = input.split('')
  let inputTemp = input
  let outputTemp: GetChunkedStringResType = []

  try {
    for (
      let indexChar = 0;
      indexChar < chunkCharacters.length;
      indexChar += 1
    ) {
      let n = chunkSize
      let isBraking: boolean = false

      /* Look backward */
      while (n && n > 0 && n >= chunkSize - maxSearch && !isBraking) {
        if (chunkCharacters[indexChar] === inputArrTemp[n] && !isBraking) {
          const stringAdded = inputTemp.slice(0, n + 1)
          outputTemp = [...output, stringAdded]
          inputTemp = inputTemp.slice(n + 1)
          inputArrTemp = inputTemp.split('')
          isBraking = true
          break
        }
        n -= 1
      }

      /* Look forward */
      while (
        n &&
        n <= inputArrTemp.length &&
        n <= chunkSize + maxSearch &&
        !isBraking
      ) {
        if (
          (chunkCharacters[indexChar] === inputArrTemp[n] ||
            (n === chunkSize + maxSearch &&
              indexChar === chunkCharacters.length - 1)) &&
          !isBraking
        ) {
          const stringAdded = inputTemp.slice(0, n + 1)
          outputTemp = [...output, stringAdded]
          inputTemp = inputTemp.slice(n + 1)
          inputArrTemp = inputTemp.split('')
          isBraking = true
          break
        }
        n += 1
      }

      if (isBraking) break
    }
  } catch (error: any) {
    console.log('getChunkedString', { parentFunction, ...error })
  } finally {
    if (inputArrTemp.length > chunkSize && input !== inputTemp)
      return getChunkedString({ input: inputTemp, output: outputTemp }, options)
    else if (input === inputTemp) {
      outputTemp = [...output, inputTemp]
    } else {
      outputTemp = [...outputTemp, inputTemp]
    }

    if (printRes) {
      console.log('getChunkedString [44]', {
        parentFunction,
        outputTemp,
      })
    }

    return outputTemp
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const text = `oh good morning uncle donald you can't wear this to your 
    job interview you gotta dress for the job you want not the job 
    you have which is no job but it's a big day and a big day calls for a big breakfast`

    const { text30 } = require('./__mocks__/texts')
    const params = {
      input: text30,
    }
    const output = getChunkedString(params, {
      printRes: false,
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 5500,
      maxSearch: 128,
    })
    consoler('getChunkedString [61]', output)
  })()
}
