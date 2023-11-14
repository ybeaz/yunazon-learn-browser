import { ConnectorOutputType } from './ConnectorOutputType'

export interface ConnectorOptionsType {
  method: string
  url: string
  headersAdd: any
  payloadAdd?: any
  payload?: any
}

export interface ConnectorType {
  (options?: ConnectorOptionsType): ConnectorOutputType
}
