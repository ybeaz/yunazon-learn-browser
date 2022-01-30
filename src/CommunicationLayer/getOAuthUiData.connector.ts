import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getOAuthUiDataConnector: Function = ({
  userNameLast,
  userNameFirst,
  picture,
  uidExternal,
  userName,
}): any => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query OAuthUiData($authInput: AuthInput) {
      oAuthUiData(authInput: $authInput) {
        path
        status
        message
        uid
        uidExternal
        uidExternal
        userName
        email
        phone
        picture
        givenName
        familyName
        webToken
      }
    }
  `
  const query = print(queryAst as DocumentNode)

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'OAuthUiData',
      variables: {
        authInput: {
          familyName: userNameLast,
          givenName: userNameFirst,
          picture,
          uidExternal,
          userName,
        },
      },
      query,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
