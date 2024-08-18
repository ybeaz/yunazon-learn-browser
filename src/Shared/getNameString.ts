import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetNameStringParamsType = {
  nameFirst?: string | null
  nameLast?: string | null
  nameMiddle?: string | null
}

export type GetNameStringOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetNameStringResType = string

interface GetNameStringType {
  (params: GetNameStringParamsType, options?: GetNameStringOptionsType): GetNameStringResType
}

const optionsDefault: Required<GetNameStringOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getNameString
 * @run ts-node src/shared/utils/getNameString.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getNameString.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getNameString, GetNameStringParamsType } from '../Shared/getNameString'
 */
export const getNameString: GetNameStringType = (
  params: GetNameStringParamsType,
  optionsIn: GetNameStringOptionsType = optionsDefault
) => {
  const options: Required<GetNameStringOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { nameFirst, nameLast, nameMiddle } = params

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  let output: GetNameStringResType = ''

  try {
    output =
      nameMiddle && nameLast && nameFirst
        ? `${nameFirst} ${nameMiddle} ${nameLast}`
        : nameLast
          ? `${nameFirst} ${nameLast}`
          : nameFirst || nameLast || ''
  } catch (error: any) {
    console.log('getNameString', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getNameString [63]', { ...parentFuncAdd, output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getNameString.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetNameStringParamsType = {}
    const output = getNameString(params, { printRes: true })
    consoler('getNameString [61]', output)
  })()
}
