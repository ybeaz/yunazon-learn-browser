import { IConnectorOutput } from './IConnectorOutput'

export interface ConnectorOptionsType {
  method: string
  url: string
  headersAdd: any
  payloadAdd?: any
  payload?: any
}

export interface ConnectorType {
  (options?: ConnectorOptionsType): IConnectorOutput
}
