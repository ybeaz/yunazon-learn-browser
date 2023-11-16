import { isObject } from './isObject'

export type getObjectSliceParamsType = {
  entity: Record<string, any>
  arrProps: string[]
  output?: Record<string, any>
}

export type getObjectSliceResType = Record<string, any>

interface getObjectSliceType {
  (
    params: getObjectSliceParamsType,
    options?: { printRes: boolean }
  ): getObjectSliceResType
}

/**
 * @description Function to getObjectSlice
 * @import import { getObjectSlice } from './getObjectSlice'
 */

export const getObjectSlice: getObjectSliceType = (
  { entity, arrProps, output = {} },
  options
) => {
  if (isObject(entity)) {
    try {
      const objProps = Object.keys(entity)
      if (objProps.length > 0) {
        objProps.forEach((objProp: string) => {
          if (arrProps.includes(objProp)) output[objProp] = entity[objProp]
          if (isObject(entity[objProp])) {
            return getObjectSlice(
              { entity: entity[objProp], arrProps, output },
              options
            )
          }
        })
      }
    } catch (error) {}
  }

  return output
}
