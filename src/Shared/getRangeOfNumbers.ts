import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetRangeOfNumbersParamsType = {
  max: number
  min: number
  steps: number
  decimals?: number
  isReverse?: boolean
}

export type GetRangeOfNumbersOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetRangeOfNumbersResType = number[]

interface GetRangeOfNumbersType {
  (
    params: GetRangeOfNumbersParamsType,
    options?: GetRangeOfNumbersOptionsType
  ): GetRangeOfNumbersResType
}

const optionsDefault: Required<GetRangeOfNumbersOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getRangeOfNumbers
 * @run ts-node src/shared/utils/getRangeOfNumbers.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getRangeOfNumbers.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getRangeOfNumbers, GetRangeOfNumbersParamsType } from '../Shared/getRangeOfNumbers'
 */
export const getRangeOfNumbers: GetRangeOfNumbersType = (
  params: GetRangeOfNumbersParamsType,
  optionsIn: GetRangeOfNumbersOptionsType = optionsDefault
) => {
  const options: Required<GetRangeOfNumbersOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { max, min: minIn, steps, decimals = 0, isReverse = false } = params
  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  let output: GetRangeOfNumbersResType = []

  try {
    let min = minIn

    // minimum step size
    let stepsize = (max - min) / steps
    // increase the step size to a nice boundary
    // for example, 1/10th of the 10^n range that includes it
    const pow = Math.trunc(Math.log10(stepsize)) - 1
    stepsize = Math.trunc(stepsize / 10 ** pow) * 10 ** pow
    // round min to the same boundary
    output = [min]
    min = Math.trunc(min / 10 ** pow) * 10 ** pow
    for (let i = 0; i < steps - 1; i++) {
      min += stepsize
      output.push(min)
    }
    output.push(max)
    output = output.map((item: number) => parseFloat(item.toFixed(decimals)))

    if (isReverse) output = [...output].reverse()
  } catch (error: any) {
    console.log('getRangeOfNumbers', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getRangeOfNumbers [76]', { ...parentFuncAdd, output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getRangeOfNumbers.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetRangeOfNumbersParamsType = { min: 1, max: 10, steps: 10, decimals: 0 }
    const output = getRangeOfNumbers(params, { printRes: true })
    consoler('getRangeOfNumbers [93]', output)
  })()
}
