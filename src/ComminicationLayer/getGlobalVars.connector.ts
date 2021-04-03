import { servers as serversConst } from '../Constants/servers.const'
import { pathNameLoadedVars } from '../Constants/pathNameLoadedVars.const'
import { isContentInfoLocal } from '../FeatureFlags/index'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getGlobalVarsConnector: Function = (): any => {
  const localRemote = isContentInfoLocal()
  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'get',
    options: { headers: { ...headers } },
    url: <string>(
      `${serversConst[localRemote]}${pathNameLoadedVars[localRemote]}/globalVars.json`
    ),
  }

  return obj
}
