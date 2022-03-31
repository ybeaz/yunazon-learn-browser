import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { readUsersQuery } from './queries/readUsersQuery'

interface IGetReadUsersConnector {
  (options: {
    isActive: boolean
    ne: Record<string, string>[]
  }): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getReadUsersConnector: IGetReadUsersConnector = options => {
  const envType: string = getDetectedEnv()

  let obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'readUsers',
      variables: { options },
      query: readUsersQuery,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
