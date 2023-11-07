import axios from 'axios'

import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'

interface ISendEmailDocumentConnector {
  (
    documentID: string,
    sendTo: string,
    sendCc: string,
    sendBcc: string,
    fragmentName: string
  ): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const sendEmailDocumentConnector: ISendEmailDocumentConnector = (
  documentID,
  sendTo,
  sendCc,
  sendBcc,
  fragmentName
) => {
  const envType: string = getDetectedEnv()

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}/graphql`,
      timeout: 1000,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'SendEmailDocument',
      variables: {
        documentID,
        sendTo,
        sendCc,
        sendBcc,
      },
      query: `query SendEmailDocument($documentID: String!, $sendTo: String!, $sendCc: String!, $sendBcc: String!){ \
        sendEmailDocument(documentID: $documentID, sendTo: $sendTo, sendCc: $sendCc, sendBcc: $sendBcc){ ...${fragmentName} }} \ 
        fragment ${FRAGMENTS_STRINGS[fragmentName]}`,
    },
  }

  return obj
}
