// @ts-nocheck

import { axiosClient } from './clients/axiosClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
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
    client: axiosClient,
    params: {
      operationName: 'Templater',
      variables,
      query: templateQuery,
    },
  }

  return obj
}
