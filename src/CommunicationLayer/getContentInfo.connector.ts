import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS } from '../Constants/servers.const'
import { PATH_NAME_LOADED_VARS } from '../Constants/pathNameLoadedVars.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getContentInfoConnector: Function = (): any => {
  const envType = getDetectedEnv()
  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'get',
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}${PATH_NAME_LOADED_VARS[envType]}/contentInfo.json`,
  }

  return obj
}
