import axios from 'axios'

import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { UserType } from '../Interfaces/UserType'
import {
  ConnectorOutputType,
  AxiosRequestHeaders,
} from '../Interfaces/ConnectorOutputType'
import { readUserAuthQuery } from './queries/readUserAuthQuery'

interface IGetReadUserAuthConnector {
  (user: UserType): ConnectorOutputType
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getReadUserAuthConnector: IGetReadUserAuthConnector = user => {
  const envType: string = getDetectedEnv()

  const { userIdAuth } = user

  let obj: ConnectorOutputType = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}/graphql`,
      timeout: 1000,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'readUserAuth',
      variables: { userIdAuth },
      query: readUserAuthQuery,
    },
  }

  return obj
}
