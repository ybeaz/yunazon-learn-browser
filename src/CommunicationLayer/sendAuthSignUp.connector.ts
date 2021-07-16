import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS } from './fragments'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const sendAuthSignUpConnector: Function = (
  login: string,
  password: string
): any => {
  const envType: string = getDetectedEnv('localServer')
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    data: {
      operationName: 'FindDocument',
      variables: {},
      query: `query FindDocument($documentID: String!){findDocument(documentID: $documentID){}}`,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
