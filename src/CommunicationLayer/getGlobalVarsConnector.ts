import { axiosClientRest } from './clients/axiosClient'
import { ConnectorOutputType } from '../@types/ConnectorOutputType'
import { templateQuery } from './graphql/templateQuery'

interface ConnectorType {
  (variables?: any): ConnectorOutputType
}

/**
 * @description Function to return getGlobalVarsConnector
 * @import import { getGlobalVarsConnector } from '../../CommunicationLayer/getGlobalVarsConnector'
 */
export const getGlobalVarsConnector: ConnectorType = variables => {
  const obj: ConnectorOutputType = {
    client: axiosClientRest,
  }

  return obj
}
