import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { ClientAppType } from '../../@types/ClientAppType'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'

export type GetHeadersParamsType = void

export type GetHeadersResType = any

interface GetHeadersType {
  (options?: { printRes?: boolean }): GetHeadersResType
}

/**
 * @description Function to getHeaders
 * @run ts-node src/shared/utils/getHeaders.ts
 * @import import { getHeaders } from '../Shared/getHeaders'
 */
export const getHeaders: GetHeadersType = options => {
  const envType = getDetectedEnv()

  const refresh_token = localStorage.getItem('refresh_token') || ''
  const redirect_uri = CLIENTS_URI[envType]
  const client_app = ClientAppType['ACADEMY']

  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    timestamp: `${+new Date()}`,
    refresh_token,
    redirect_uri,
    client_app,
  }

  if (options?.printRes) {
    console.log('getHeaders [35]', { headers })
  }

  return headers
}
