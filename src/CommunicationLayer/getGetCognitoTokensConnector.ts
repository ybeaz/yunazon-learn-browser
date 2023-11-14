import axios from 'axios'
import qs from 'qs'

import { ConnectorType } from '../Interfaces/ConnectorType'
import { IConnectorOutput, Method } from '../Interfaces/IConnectorOutput'

export const getGetCognitoTokensConnector: ConnectorType = options => {
  const { method, url, headersAdd, payloadAdd, payload } = options

  const methodNext: Method = method as Method

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: url,
      timeout: 1000,
      headers: headersAdd,
    }),
    method: methodNext,
    params: {
      operationName: '',
      variables: '',
      query: qs.stringify({ ...payloadAdd, ...payload }),
    },
  }

  return obj
}
