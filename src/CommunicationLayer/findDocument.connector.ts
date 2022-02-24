import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IFindDocumentConnector {
  (documentID: string, fragmentName: string): IConnectorOutput
}

const headers: IHeaders = {
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

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'FindDocument',
      variables: {
        documentID,
      },
      query,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
