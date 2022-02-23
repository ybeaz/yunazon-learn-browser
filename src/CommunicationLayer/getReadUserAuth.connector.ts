import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { IUser } from '../Interfaces/IRootStore'

import { readUserAuthQuery } from './queries/readUserAuthQuery'

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

interface IGetReadUserAuthConnector {
  (user: IUser): {
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

export const getReadUserAuthConnector: IGetReadUserAuthConnector = user => {
  const envType: string = getDetectedEnv()

  const { userIdAuth } = user

  let obj: any = {
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
