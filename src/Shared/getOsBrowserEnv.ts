import { consoler } from './consoler'
import { OsEnvEnumType, BrowserEnvEnumType } from '../@types/OsBrowserEnvEnumType'

export { OsEnvEnumType, BrowserEnvEnumType }

export type GetOsBrowserEnvOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetOsBrowserEnvResType = {
  osType: OsEnvEnumType
  browserType: BrowserEnvEnumType
  userAgent: string
}

interface GetOsBrowserEnvType {
  (options?: GetOsBrowserEnvOptionsType): GetOsBrowserEnvResType
}

const optionsDefault: Required<GetOsBrowserEnvOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getOsBrowserEnv
 * @run ts-node src/Shared/getOsBrowserEnv.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/getOsBrowserEnv.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getOsBrowserEnv, GetOsBrowserEnvResType, OsEnvEnumType, BrowserEnvEnumType } from '../Shared/getOsBrowserEnv'
 */
export const getOsBrowserEnv: GetOsBrowserEnvType = (
  optionsIn: GetOsBrowserEnvOptionsType = optionsDefault
) => {
  const options: Required<GetOsBrowserEnvOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

  let output: GetOsBrowserEnvResType = {
    osType: OsEnvEnumType['Unknown'],
    browserType: BrowserEnvEnumType['Unknown'],
    userAgent,
  }

  try {
    /* Detect osType */
    if (/windows phone/i.test(userAgent)) {
      output.osType = OsEnvEnumType['Windows']
    }

    if (/android/i.test(userAgent)) {
      output.osType = OsEnvEnumType['Android']
    }

    if (/Node/.test(userAgent)) {
      output.osType = OsEnvEnumType['Node']
    }

    if (/Macintosh/.test(userAgent) && !(window as any).MSStream) {
      output.osType = OsEnvEnumType['Macintosh']
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      output.osType = OsEnvEnumType['iOS']
    }

    /* Detect browserType */
    if (/Chrome/.test(userAgent) && !(window as any).MSStream) {
      output.browserType = BrowserEnvEnumType['Chrome']
    }

    if (/Firefox/.test(userAgent) && !(window as any).MSStream) {
      output.browserType = BrowserEnvEnumType['Firefox']
    }

    if (/Edg/.test(userAgent) && !(window as any).MSStream) {
      output.browserType = BrowserEnvEnumType['Edg']
    }

    if (/Version/.test(userAgent) && !(window as any).MSStream) {
      output.browserType = BrowserEnvEnumType['Safari']
    }
  } catch (error: any) {
    console.log('getOsBrowserEnv', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getOsBrowserEnv [63]', { ...parentFuncAdd, output, userAgent })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getOsBrowserEnv.ts
 */
if (require.main === module) {
  ;(async () => {
    const params = ''
    const output = getOsBrowserEnv({ printRes: true })
    // consoler('getOsBrowserEnv [61]', output)
  })()
}
