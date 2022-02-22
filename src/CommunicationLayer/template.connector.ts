import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IHeaders {
  'Access-Control-Allow-Origin': string
  'Content-Type': string
  timestamp: number
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

interface ITemplateConnector {
  (): {
    testCapture: string
    method: string
    payload: {
      operationName: string
      variables: any
      query: string
    }
    options: { headers: IHeaders }
    url: string
  }
}

export const templateConnector: ITemplateConnector = () => {
  const envType: string = getDetectedEnv()

  const obj: any = {
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
