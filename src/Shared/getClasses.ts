export type ClassAddedType =
  | undefined
  | string
  | (undefined | string)[]
  | Record<string, string | (string | undefined)[]>

export type GetClassesResType = string

interface GetClassesType {
  (className: string, classAdded?: ClassAddedType): GetClassesResType
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
        (accum: string, item: string | undefined) =>
          item ? `${accum} ${item}` : `${accum}`,
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
        (accum: string, item: string | undefined) =>
          item ? `${accum} ${item}` : `${accum}`,
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
