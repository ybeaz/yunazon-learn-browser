import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getAuthSignInConnector: Function = (
  userEmail: string,
  userPasswordAuth: string
): any => {
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

  const obj: any = {
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
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
