import { axiosClientRest } from './clients/axiosClient'
import { ConnectorOutputType } from '../@types/ConnectorOutputType'
import { templateQuery } from './graphql/templateQuery'

interface ConnectorType {
  (variables: any): ConnectorOutputType
}

/**
 * @description Function to return templateConnector
 * @import import { templateConnector } from '../../CommunicationLayer/templateConnector'
 */
export const templateConnector: ConnectorType = variables => {
  const obj: ConnectorOutputType = {
    client: axiosClientRest,
    params: {
      operationName: 'Templater',
      variables,
      query: templateQuery,
    },
  }

  return obj
}
