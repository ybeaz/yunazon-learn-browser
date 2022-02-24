import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
interface ITemplateConnector {
  (): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const templateConnector: ITemplateConnector = () => {
  const envType: string = getDetectedEnv()

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'SendTemplate',
      variables: {},
      query: `query SendTemplate(){sendTemplate(){} }} fragment ${FRAGMENTS_STRINGS['']}`,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
