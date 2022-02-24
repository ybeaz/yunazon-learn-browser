import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IGetOAuthGoogleConnector {
  (clientId: string, credential: string, select_by: string): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getOAuthGoogleConnector: IGetOAuthGoogleConnector = (
  clientId,
  credential,
  select_by
) => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query OAuthGoogle($oAuthGoogleInput: OAuthGoogleInput) {
      oAuthGoogle(oAuthGoogleInput: $oAuthGoogleInput) {
        path
        status
        message
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

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'OAuthGoogle',
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
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
