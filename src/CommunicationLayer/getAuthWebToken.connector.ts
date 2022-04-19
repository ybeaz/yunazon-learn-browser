import axios from 'axios'
import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IGetAuthWebTokenConnector {
  (userWebTokenAuth: string): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getAuthWebTokenConnector: IGetAuthWebTokenConnector =
  userWebTokenAuth => {
    const envType: string = getDetectedEnv()

    const queryAst: DocumentNode = gql`
      query AuthWebToken($webToken: String) {
        authWebToken(webToken: $webToken) {
          email
          message
          path
          picture
          roles
          status
          uid
          userName
          webToken
        }
      }
    `
    const query = print(queryAst as DocumentNode)

    const obj: IConnectorOutput = {
      testCapture: 'should return 200 code and data defined',
      axiosClient: axios.create({
        baseURL: `${SERVERS[envType]}/graphql`,
        timeout: 1000,
        headers,
      }),
      method: 'post',
      params: {
        operationName: 'AuthWebToken',
        variables: {
          webToken: userWebTokenAuth,
        },
        query,
      },
    }

    return obj
  }
