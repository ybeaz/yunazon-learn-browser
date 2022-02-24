import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IGetAuthSignInConnector {
  (userEmail: string, userPasswordAuth: string): IConnectorOutput
}

const headers: IHeaders = {
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

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'AuthLoginPass',
      variables: {
        email: userEmail,
        password: userPasswordAuth,
      },
      query,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
