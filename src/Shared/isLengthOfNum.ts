interface IsLengthOfNumType {
  (num: number): (entity: any) => boolean
}

/**
 * @description Function to determine if the input is an array
 * @run ts-node src/Shared/isLengthOfNum.ts
 */

export const isLengthOfNum: IsLengthOfNumType = (num: number) => entity =>
  entity.length && entity.length >= num

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const input = 'DC5s7ABCWq8'

    const isLength6More = isLengthOfNum(6)
    const output = isLength6More(input)

    console.log('isLengthOfNum [20]', { input, output })
  })()
}
