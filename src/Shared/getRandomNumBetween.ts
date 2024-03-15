import { consoler } from './consoler'

export type GetRandomNumBetweenResType = number

interface GetRandomNumBetween {
  (
    min: number,
    max: number,
    isInteger?: boolean,
    options?: { precision?: number; printRes?: boolean }
  ): GetRandomNumBetweenResType
}

/**
 * @description Function to return random number
 * @run ts-node src/shared/utils/getRandomNumBetween.ts
 * @import import { getRandomNumBetween } from '../src/shared/utils/getRandomNumBetween'
 */
export const getRandomNumBetween: GetRandomNumBetween = (
  min: number,
  max: number,
  isInteger: boolean = true
): number => {
  let output: number = Math.random() * (max - min + 1) + min
  if (isInteger) output = Math.round(output)

  return output
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const min = 2
  const max = 5
  const isInteger = false
  const outout = getRandomNumBetween(min, max, isInteger)
  consoler('getConvertedType [38]', { min, max, outout })
}
