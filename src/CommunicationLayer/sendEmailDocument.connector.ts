import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS } from './fragments'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const sendEmailDocumentConnector: Function = (
  documentID: string,
  sendTo: string,
  sendCc: string,
  sendBcc: string,
  fragmentName: string
): any => {
  const envType: string = getDetectedEnv()
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'SendEmailDocument',
      variables: {
        documentID,
        sendTo,
        sendCc,
        sendBcc,
      },
      query: `query SendEmailDocument($documentID: String!, $sendTo: String!, $sendCc: String!, $sendBcc: String!){sendEmailDocument(documentID: $documentID, sendTo: $sendTo, sendCc: $sendCc, sendBcc: $sendBcc){ ...${fragmentName} }} fragment ${FRAGMENTS[fragmentName]}`,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
