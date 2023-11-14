import axios from 'axios'
import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import {
  ConnectorOutputType,
  AxiosRequestHeaders,
} from '../Interfaces/ConnectorOutputType'
import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IGetAuthSignInConnector {
  (userEmail: string, userPasswordAuth: string): ConnectorOutputType
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getAuthSignInConnector: IGetAuthSignInConnector = (
  userEmail,
  userPasswordAuth
) => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query AuthLoginPass($email: String, $password: String) {
      authLoginPass(email: $email, password: $password) {
        path
        status
        message
        email
        uid
        userName
        webToken
        roles
      }
    }
  `
  const query = print(queryAst as DocumentNode)

  const obj: ConnectorOutputType = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}/graphql`,
      timeout: 1000,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'AuthLoginPass',
      variables: {
        email: userEmail,
        password: userPasswordAuth,
      },
      query,
    },
  }

  return obj
}
