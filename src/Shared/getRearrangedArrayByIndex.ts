import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetRearrangedArrayByIndexParamsType = {
  arrayIn: any[]
  typeIn?: string
  indexIn?: number
}

export type GetRearrangedArrayByIndexOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetRearrangedArrayByIndexResType = any[]

interface GetRearrangedArrayByIndexType {
  (
    params: GetRearrangedArrayByIndexParamsType,
    options?: GetRearrangedArrayByIndexOptionsType
  ): GetRearrangedArrayByIndexResType
}

const optionsDefault: Required<GetRearrangedArrayByIndexOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getRearrangedArrayByIndex
 * @run ts-node src/shared/utils/getRearrangedArrayByIndex.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getRearrangedArrayByIndex.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getRearrangedArrayByIndex, GetRearrangedArrayByIndexParamsType } from '../Shared/getRearrangedArrayByIndex'
 */
export const getRearrangedArrayByIndex: GetRearrangedArrayByIndexType = (
  params: GetRearrangedArrayByIndexParamsType,
  optionsIn: GetRearrangedArrayByIndexOptionsType = optionsDefault
) => {
  const options: Required<GetRearrangedArrayByIndexOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}
  const { arrayIn, typeIn, indexIn } = params

  let output: GetRearrangedArrayByIndexResType = []

  try {
    let arrayInRest = []
    let elementToMove = []

    if (typeIn) {
      arrayInRest = arrayIn.filter((element: any) => element.typeIn != typeIn)
      elementToMove = arrayIn.filter((element: any) => element.typeIn === typeIn)
    } else {
      arrayInRest = arrayIn.filter((_: any, index: number) => index != indexIn)
      elementToMove = arrayIn.filter((_: any, index: number) => index === indexIn)
    }

    if (elementToMove) output = [...elementToMove, ...arrayInRest]
    else output = arrayIn
  } catch (error: any) {
    console.log('getRearrangedArrayByIndex', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getRearrangedArrayByIndex [63]', { ...parentFuncAdd, output, arrayIn, indexIn })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getRearrangedArrayByIndex.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetRearrangedArrayByIndexParamsType = { arrayIn: [], typeIn: '', indexIn: 0 }
    const output = await getRearrangedArrayByIndex(params, { printRes: true })
    consoler('getRearrangedArrayByIndex [61]', output)
  })()
}
