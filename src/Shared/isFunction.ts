export type IsFunctionParamsType = any

export type IsFunctionOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type IsFunctionResType = boolean

interface IsFunctionType {
  (
    params: IsFunctionParamsType,
    options?: IsFunctionOptionsType
  ): IsFunctionResType
}

const optionsDefault: IsFunctionOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to isFunction
 * @run ts-node src/shared/utils/isFunction.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/isFunction.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { isFunction, isFunctionParamsType } from '../Shared/'
 */
export const isFunction: IsFunctionType = (
  value: IsFunctionParamsType,
  optionsIn: IsFunctionOptionsType = optionsDefault
) => {
  const options: IsFunctionOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: boolean = false

  try {
    output = value
      ? Object.prototype.toString.call(value) === '[object Function]' ||
        'function' === typeof value ||
        value instanceof Function
      : false

    if (printRes) {
      console.log('isFunction [43]', { output })
    }
  } catch (error: any) {
    console.log('isFunction', 'Error', {
      parentFunction,
      message: error.messag,
    })
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
    const output = await isFunction(input, { printRes: true })
    console.log('isFunction [60]', { input, output })
  })()
}
