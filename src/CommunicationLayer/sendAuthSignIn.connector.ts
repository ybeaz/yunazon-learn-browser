import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const sendAuthSignInConnector: Function = (
  emailAuth: string,
  passwordAuth: string
): any => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query GetAuthLoginPass($email: String, $password: String) {
      getAuthLoginPass(email: $email, password: $password) {
        status
        email
        uid
        userName
        webToken
        roles
      }
    }
  `
  const query = print(queryAst as DocumentNode)

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'GetAuthLoginPass',
      variables: {
        email: emailAuth,
        password: passwordAuth,
      },
      query,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
