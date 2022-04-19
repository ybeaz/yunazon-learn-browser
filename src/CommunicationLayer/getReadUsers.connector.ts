import axios from 'axios'

import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { readUsersQuery } from './queries/readUsersQuery'

interface IGetReadUsersConnector {
  (options: {
    isActive: boolean
    ne: Record<string, string>[]
  }): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getReadUsersConnector: IGetReadUsersConnector = options => {
  const envType: string = getDetectedEnv()

  let obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}/graphql`,
      timeout: 1000,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'readUsers',
      variables: { options },
      query: readUsersQuery,
    },
  }

  return obj
}
