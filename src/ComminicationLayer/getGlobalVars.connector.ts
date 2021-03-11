import { servers as serversConst } from '../Constants/servers.const'
import { EcomAssetsAll } from './fragments'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getGlobalVarsConnector: Function = (): any => {
  const server = 'remote'
  const pathname = '/filestorage/globalVars.json'

  const obj = {
    testCapture: 'should return 200 code and data defined',
    pathname,
    method: 'get',
    options: { headers: { ...headers } },
    url: `${serversConst[server]}${pathname}`,
  }

  return obj
}
