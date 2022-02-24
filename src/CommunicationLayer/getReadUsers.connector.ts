import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { IUser } from '../Interfaces/IRootStore'

import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { readUserAuthQuery } from './queries/readUserAuthQuery'

interface IGetReadUserAuthConnector {
  (user: IUser): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getReadUsersConnector: IGetReadUserAuthConnector = user => {
  const envType: string = getDetectedEnv()

  const { userIdAuth } = user

  let obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'readUserAuth',
      variables: { userIdAuth },
      query: readUserAuthQuery,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
