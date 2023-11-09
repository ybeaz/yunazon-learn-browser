import { axiosClientRest } from './clients/axiosClient'
import { ConnectorOutputType } from '../@types/ConnectorOutputType'
import { templateQuery } from './graphql/templateQuery'

interface ConnectorType {
  (variables?: any): ConnectorOutputType
}

/**
 * @description Function to return getContentInfoConnector
 * @import import { getContentInfoConnector } from '../../CommunicationLayer/getContentInfoConnector'
 */
export const getContentInfoConnector: ConnectorType = variables => {
  const obj: ConnectorOutputType = {
    client: axiosClientRest,
  }

  return obj
}
