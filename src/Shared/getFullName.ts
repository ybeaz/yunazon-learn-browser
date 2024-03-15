import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetFullNameParamsType = {
  nameFirst?: string
  nameMiddle?: string
  nameLast?: string
}

export type GetFullNameOptionsType = {
  printRes?: boolean
  env?: string
}

export type GetFullNameResType = string

interface GetFullNameType {
  (
    params: GetFullNameParamsType,
    options?: GetFullNameOptionsType
  ): GetFullNameResType
}

const optionsDefault: Required<GetFullNameOptionsType> = {
  printRes: false,
  env: '',
}

/**
 * @description Function to getFullName
 * @run ts-node src/shared/utils/getFullName.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getFullName.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getFullName, GetFullNameParamsType } from '../Shared/getFullName'
 */
export const getFullName: GetFullNameType = (
  params: GetFullNameParamsType,
  optionsIn: GetFullNameOptionsType = optionsDefault
) => {
  const options: Required<GetFullNameOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { nameFirst, nameMiddle, nameLast } = params

  const { printRes, env } = options

  let output = ''

  try {
    output = `${nameFirst ? nameFirst : ''} ${
      nameFirst && nameMiddle ? nameMiddle : ''
    } ${nameLast && nameLast ? nameLast : ''}`
      .replace(/\s\s+/g, ' ')
      .trim()
  } catch (error: any) {
    console.log('getFullName', 'Error', {
      env,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getFullName [63]', { output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getFullName.ts
 */
if (require.main === module) {
  ;(async () => {
    const paramsArr: GetFullNameParamsType[] = [
      {
        nameFirst: 'John',
        nameMiddle: undefined,
        nameLast: 'Atkinson',
      },
      {
        nameFirst: undefined,
        nameMiddle: undefined,
        nameLast: 'Atkinson',
      },
      {
        nameFirst: undefined,
        nameMiddle: 'P.',
        nameLast: 'Atkinson',
      },
    ]

    const output = paramsArr.map((params: GetFullNameParamsType) =>
      getFullName(params, { printRes: false })
    )
    consoler('getFullName [75]', output)
  })()
}
