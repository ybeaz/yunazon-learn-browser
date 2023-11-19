import axios from 'axios'
import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import {
  ConnectorOutputType,
  AxiosRequestHeaders,
} from '../Interfaces/ConnectorOutputType'
import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IFindDocumentConnector {
  (documentID: string, fragmentName: string): ConnectorOutputType
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const findDocumentConnector: IFindDocumentConnector = (
  documentID,
  fragmentName
) => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query FindDocument($documentID: String!){
      findDocument(documentID: $documentID){
        ...${fragmentName} }
      }
      fragment ${FRAGMENTS_STRINGS[fragmentName]}
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
      operationName: 'FindDocument',
      variables: {
        documentID,
      },
      query,
    },
  }

  return obj
}
