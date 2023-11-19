export type GetClassesParamsType = any

export type GetClassesResType = string

interface GetClassesType {
  (
    className: string,
    classAdded?: string | string[] | Record<string, string | string[]>
  ): GetClassesResType
}

/**
 * @description Function to getClasses
 * @run ts-node src/shared/utils/getClasses.ts
 * @import import { getClasses } from './Shared/getClasses'
 */

export const getClasses: GetClassesType = (className, classAdded) => {
  let output: string = className

  if (classAdded) {
    if (typeof classAdded === 'string') output = `${className} ${classAdded}`
    else if (Array.isArray(classAdded)) {
      output = classAdded.reduce(
        (accum: string, item: string) => `${accum} ${item}`,
        className
      )
    } else if (
      classAdded[className] &&
      typeof classAdded[className] === 'string'
    ) {
      output = `${className} ${classAdded[className]}`
    } else if (Array.isArray(classAdded[className])) {
      // @ts-expect-error
      output = classAdded[className].reduce(
        (accum: string, item: string) => `${accum} ${item}`,
        className
      )
    }
  }
  return output
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = ''
  const input2 = { myClass: '' }
  const outout = getClasses(input, input2)
  console.log('getConvertedType [48]', { input, outout })
}
