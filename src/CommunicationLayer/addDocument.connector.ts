import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IAddDocumentConnector {
  (vars: any, fragmentName: string): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const addDocumentConnector: IAddDocumentConnector = (
  vars,
  fragmentName
) => {
  const envType: string = getDetectedEnv()
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'AddDocument',
      variables: {
        addDocumentInputGraphql: { ...vars, env },
      },
      query: `mutation AddDocument($addDocumentInputGraphql: AddDocumentInputGraphql!){ addDocument(addDocumentInputGraphql: $addDocumentInputGraphql){ ...${fragmentName} }} fragment ${FRAGMENTS_STRINGS[fragmentName]}`,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
