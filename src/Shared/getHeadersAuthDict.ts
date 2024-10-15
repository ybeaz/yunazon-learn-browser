import { consoler } from './consoler'
import { CLIENTS_URI } from '../Constants/clientsUri.const'
import { ClientAppEnumType } from 'yourails_common'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { getLocalStorageReadKeyObj } from './getLocalStorageReadKeyObj'

export type GetHeadersAuthDictParamsType = VideoDecoder

export type GetHeadersAuthDictOptionsType = { printRes?: boolean }

export type GetHeadersAuthDictResType = {
  refresh_token?: string
  redirect_uri?: string
  client_app?: string
}

interface GetHeadersAuthDictType {
  (options?: GetHeadersAuthDictOptionsType): GetHeadersAuthDictResType
}

const optionsDefault: GetHeadersAuthDictOptionsType = { printRes: false }

/**
 * @description Function to getHeadersAuthDict
 * @run ts-node src/shared/utils/getHeadersAuthDict.ts
 * @import import { getHeadersAuthDict } from '../Shared/getHeadersAuthDict'
 */
export const getHeadersAuthDict: GetHeadersAuthDictType = (
  optionsIn: GetHeadersAuthDictOptionsType = optionsDefault
) => {
  const options: GetHeadersAuthDictOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  let headersAuthDict: GetHeadersAuthDictResType = {}

  try {
    const refresh_token = getLocalStorageReadKeyObj('refresh_token')

    const envType = getDetectedEnv()
    const redirect_uri = CLIENTS_URI[envType]
    const client_app = ClientAppEnumType['ACADEMY']

    if (refresh_token && redirect_uri && client_app) {
      headersAuthDict = {
        refresh_token,
        redirect_uri,
        client_app,
      }
    }

    if (options?.printRes) {
      console.log('getHeadersAuthDict [43]', { headersAuthDict })
    }
  } catch (error: any) {
    console.log('getHeadersAuthDict', 'Error', error.message)
  } finally {
    return headersAuthDict
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const output = getHeadersAuthDict({ printRes: true })
    consoler('getHeadersAuthDict [61]', output)
  })()
}
