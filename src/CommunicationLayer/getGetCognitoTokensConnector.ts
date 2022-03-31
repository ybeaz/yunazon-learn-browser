import qs from 'qs'

import { IConnector } from '../Interfaces/IConnector'
import { IConnectorOutput } from '../Interfaces/IConnectorOutput'

export const getGetCognitoTokensConnector: IConnector = options => {
  const { method, url, headersAdd, payloadAdd, payload } = options

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method,
    options: {
      headers: { ...headersAdd },
    },
    payload: qs.stringify({ ...payloadAdd, ...payload }),
    url,
  }

  return obj
}
