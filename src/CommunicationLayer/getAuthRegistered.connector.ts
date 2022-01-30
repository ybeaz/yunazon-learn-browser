import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getAuthRegisteredConnector: Function = (
  userNameFirst: string,
  userEmail: string,
  passwordAuth: string
): any => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query Register($authInput: AuthInput) {
      register(authInput: $authInput) {
        path
        status
        message
        uid
        userName
        email
        phone
        webToken
      }
    }
  `
  const query = print(queryAst as DocumentNode)

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'Register',
      variables: {
        authInput: {
          userName: userNameFirst,
          email: userEmail,
          password: passwordAuth,
          phone: 0,
        },
      },
      query,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
