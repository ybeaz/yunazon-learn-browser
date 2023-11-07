import axios from 'axios'

import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IGetOAuthUiDataConnector {
  (connectorInput: {
    userNameLast: string
    userNameFirst: string
    picture: string
    userIdExternal: string
    userName: string
  }): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getOAuthUiDataConnector: IGetOAuthUiDataConnector = ({
  userNameLast,
  userNameFirst,
  picture,
  userIdExternal,
  userName,
}) => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query OAuthUiData($authInput: AuthInput) {
      oAuthUiData(authInput: $authInput) {
        path
        status
        message
        uid
        uidExternal: userIdExternal
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
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}/graphql`,
      timeout: 1000,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'OAuthUiData',
      variables: {
        authInput: {
          familyName: userNameLast,
          givenName: userNameFirst,
          picture,
          uidExternal: userIdExternal,
          userName,
        },
      },
      query,
    },
  }

  return obj
}
