import { IConnectorOutput } from './IConnectorOutput'

export interface IConnectorOptions {
  method: string
  url: string
  headersAdd: any
  payloadAdd?: any
  payload?: any
}

export interface IConnector {
  (options?: IConnectorOptions): IConnectorOutput
}
