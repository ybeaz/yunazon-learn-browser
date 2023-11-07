import axios from 'axios'

import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { IUser } from '../Interfaces/IUser'
import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { readUserAuthQuery } from './queries/readUserAuthQuery'

interface IGetReadUserAuthConnector {
  (user: IUser): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getReadUserAuthConnector: IGetReadUserAuthConnector = user => {
  const envType: string = getDetectedEnv()

  const { userIdAuth } = user

  let obj: IConnectorOutput = {
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
