export type GetClassesParamsType = any

export type GetClassesResType = string

interface GetClassesType {
  (
    className: string,
    classProps?: string | string[] | Record<string, string | string[]>
  ): GetClassesResType
}

/**
 * @description Function to getClasses
 * @run ts-node src/shared/utils/getClasses.ts
 * @import import { getClasses } from './Shared/getClasses'
 */

export const getClasses: GetClassesType = (className, classProps) => {
  let output: string = className

  if (classProps) {
    if (typeof classProps === 'string') output = `${className} ${classProps}`
    else if (Array.isArray(classProps)) {
      output = classProps.reduce(
        (accum: string, item: string) => `${accum} ${item}`,
        className
      )
    } else if (
      classProps[className] &&
      typeof classProps[className] === 'string'
    ) {
      output = `${className} ${classProps[className]}`
    } else if (Array.isArray(classProps[className])) {
      // @ts-expect-error
      output = classProps[className].reduce(
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
