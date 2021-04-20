import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS } from './fragments'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const retrieveDocumentDataConnector: Function = (
  vars: any,
  fragmentName: string
): any => {
  const envType: string = getDetectedEnv('localServer')
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    data: {
      operationName: 'AddDocument',
      variables: {
        newDocumentInputGraphql: { ...vars, env },
      },
      query: `mutation AddDocument($newDocumentInputGraphql: NewDocumentInputGraphql!){ addDocument(newDocumentInputGraphql: $newDocumentInputGraphql){ ...${fragmentName} }} fragment ${FRAGMENTS[fragmentName]}`,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
