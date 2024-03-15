export type WithDebounceOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type WithDebounceResType = any

interface WithDebounceType {
  (
    callback: any,
    delay?: number,
    options?: WithDebounceOptionsType
  ): WithDebounceResType
}

const optionsDefault: WithDebounceOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to withDebounce
 * @run ts-node src/shared/utils/withDebounce.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/withDebounce.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { withDebounce, withDebounceParamsType } from '../Shared/withDebounce'
 */
export const withDebounce = function (
  callback: any,
  delay: number,
  optionsIn: WithDebounceOptionsType = optionsDefault
) {
  const options: WithDebounceOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let firstTime = true
  let timeNowInit = Date.now()

  return function (...callbackParams: any): any {
    let output: any = undefined

    try {
      const timeNow = Date.now()
      if (firstTime || timeNow - timeNowInit > delay) {
        firstTime = false
        if (!firstTime) timeNowInit = timeNow
        output = callback(...callbackParams)
      }

      if (printRes) {
        console.log('withDebounce [43]', { output })
      }
    } catch (error: any) {
      console.log('withDebounce', 'Error', {
        parentFunction,
        message: error.messag,
      })
    } finally {
      return output
    }
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const input = () => true
    const output = withDebounce(input, 500, { printRes: true })
    console.log('withDebounce [60]', { input, output })
  })()
}
