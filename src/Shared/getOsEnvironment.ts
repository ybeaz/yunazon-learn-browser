import { consoler } from './consoler'
import { OsEnvironmentEnumType } from '../@types/OsEnvironmentEnumType'

export type GetOsEnvironmentParamsType = any

export type GetOsEnvironmentOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export { OsEnvironmentEnumType }

interface GetOsEnvironmentType {
  (options?: GetOsEnvironmentOptionsType): OsEnvironmentEnumType
}

const optionsDefault: Required<GetOsEnvironmentOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getOsEnvironment
 * @run ts-node src/Shared/getOsEnvironment.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/getOsEnvironment.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getOsEnvironment, GetOsEnvironmentParamsType } from '../Shared/getOsEnvironment'
 */
export const getOsEnvironment: GetOsEnvironmentType = (
  optionsIn: GetOsEnvironmentOptionsType = optionsDefault
) => {
  const options: Required<GetOsEnvironmentOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  let output: OsEnvironmentEnumType = OsEnvironmentEnumType['Unknown']

  try {
    var userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

    if (/windows phone/i.test(userAgent)) {
      output = OsEnvironmentEnumType['Windows']
    }

    if (/android/i.test(userAgent)) {
      output = OsEnvironmentEnumType['Android']
    }

    if (/Macintosh/.test(userAgent) && !(window as any).MSStream) {
      output = OsEnvironmentEnumType['Macintosh']
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      output = OsEnvironmentEnumType['iOS']
    }

    if (/Node/.test(userAgent)) {
      output = OsEnvironmentEnumType['Node']
    }
  } catch (error: any) {
    console.log('getOsEnvironment', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getOsEnvironment [63]', { ...parentFuncAdd, output, userAgent })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getOsEnvironment.ts
 */
if (require.main === module) {
  ;(async () => {
    const params = ''
    const output = getOsEnvironment({ printRes: true })
    // consoler('getOsEnvironment [61]', output)
  })()
}
