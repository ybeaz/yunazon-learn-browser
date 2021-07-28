import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getOAuthGoogleConnector: Function = (
  clientId: string,
  credential: string,
  select_by: string
): any => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query GetOAuthGoogle($oAuthGoogleInput: OAuthGoogleInput) {
      getOAuthGoogle(oAuthGoogleInput: $oAuthGoogleInput) {
        status
        path
        uid
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
      operationName: 'GetOAuthGoogle',
      variables: {
        oAuthGoogleInput: {
          clientId,
          credential,
          select_by,
        },
      },
      query,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
