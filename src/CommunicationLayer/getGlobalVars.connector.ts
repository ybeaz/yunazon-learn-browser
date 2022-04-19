import axios from 'axios'

import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { SERVERS } from '../Constants/servers.const'
import { PATH_NAME_LOADED_VARS } from '../Constants/pathNameLoadedVars.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getGlobalVarsConnector: Function = (): IConnectorOutput => {
  const envType = getDetectedEnv()
  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}${PATH_NAME_LOADED_VARS[envType]}/globalVars.json`,
      timeout: 1000,
      headers,
    }),
    method: 'get',
  }

  return obj
}
