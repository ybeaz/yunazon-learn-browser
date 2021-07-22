import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS } from './fragments'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const findDocumentConnector: Function = (
  documentID: string,
  fragmentName: string
): any => {
  const envType: string = getDetectedEnv()
  const env: string = envType === 'remote' ? 'production' : 'development'

  const queryAst: DocumentNode = gql`
    query FindDocument($documentID: String!){
      findDocument(documentID: $documentID){
        ...${fragmentName} }
      }
      fragment ${FRAGMENTS[fragmentName]}
  `
  const query = print(queryAst as DocumentNode)

  const obj: any = {
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
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
