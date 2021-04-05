import { servers as serversConst } from '../Constants/servers.const'
import { pathNameLoadedVars } from '../Constants/pathNameLoadedVars.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getGlobalVarsConnector: Function = (): any => {
  const envType = getDetectedEnv()
  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'get',
    options: { headers: { ...headers } },
    url: <string>(
      `${serversConst[envType]}${pathNameLoadedVars[envType]}/globalVars.json`
    ),
  }

  return obj
}
